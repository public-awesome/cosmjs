import { fromHex, Bech32 } from "@cosmjs/encoding";
import { Secp256k1, ExtendedSecp256k1Signature } from "@cosmjs/crypto";
import { rawSecp256k1PubkeyToAddress } from "./address";

describe("Stakebird", () => {
  const privKey = "b8c462d2bb0c1a92edf44f735021f16c270f28ee2c3d1cb49943a5e70a3c763e";
  const privHexKey = fromHex(privKey);

  describe("derive address and test key", () => {
    it("works", async () => {
      const keypair = await Secp256k1.makeKeypair(privHexKey);
      expect(keypair.pubkey).toEqual(fromHex("04f146c27639179e5b67b8646108f48e1a78b146c74939e34afaa5414ad5c93f8aec5404281a625026f93f56575c4a94d75f3a4ac5a2403feaf1c8ef24bd1c99c5"));

      const pubkey = Secp256k1.compressPubkey(keypair.pubkey)
      const addr = rawSecp256k1PubkeyToAddress(pubkey, "stb")
      expect(addr).toEqual("stb1kxt5x5q2l57ma2d434pqpafxdm0mgeg96vptum")
    });

    it("can load private keys", async () => {
        expect(
          await Secp256k1.makeKeypair(privHexKey),
        ).toBeTruthy();
    });

    it("creates signatures", async () => {
        const keypair = await Secp256k1.makeKeypair(privHexKey);
        const messageHash = new Uint8Array([0x11, 0x22]);
        const signature = (await Secp256k1.createSignature(messageHash, keypair.privkey)).toDer();
        expect(signature).toBeTruthy();
        expect(signature.byteLength).toBeGreaterThanOrEqual(70);
        expect(signature.byteLength).toBeLessThanOrEqual(72);
      });
    
      it("creates signatures deterministically", async () => {
        const keypair = await Secp256k1.makeKeypair(privHexKey);
        const messageHash = new Uint8Array([0x11, 0x22]);
    
        const signature1 = await Secp256k1.createSignature(messageHash, keypair.privkey);
        const signature2 = await Secp256k1.createSignature(messageHash, keypair.privkey);
        expect(signature1).toEqual(signature2);
      });

      it("verifies signatures", async () => {
        const keypair = await Secp256k1.makeKeypair(privHexKey);
        const messageHash = new Uint8Array([0x11, 0x22]);
        const signature = await Secp256k1.createSignature(messageHash, keypair.privkey);
    
        {
          // valid
          const ok = await Secp256k1.verifySignature(signature, messageHash, keypair.pubkey);
          expect(ok).toEqual(true);
        }
    });
  });
});
