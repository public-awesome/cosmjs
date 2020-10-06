import { fromHex, toHex, Bech32 } from "@cosmjs/encoding";
import { Secp256k1 } from "@cosmjs/crypto";

describe("Stakebird", () => {
  const privKey = "b8c462d2bb0c1a92edf44f735021f16c270f28ee2c3d1cb49943a5e70a3c763e";
  const privHexKey = fromHex(privKey);

  describe("derive public key", () => {
    it("works", async () => {
      const keypair = await Secp256k1.makeKeypair(privHexKey);
      expect(keypair.pubkey).toEqual(fromHex("04f146c27639179e5b67b8646108f48e1a78b146c74939e34afaa5414ad5c93f8aec5404281a625026f93f56575c4a94d75f3a4ac5a2403feaf1c8ef24bd1c99c5"));

      const uncompressed = keypair.pubkey
      const encoded = Bech32.encode("stbpub", Secp256k1.compressPubkey(uncompressed));
      expect(encoded).toEqual("stbpub1q0c5dsnk8yteukm8hpjxzz853cd83v2xcaynnc62l2j5zjk4eylc5xgs30m")
    });
  });
});
