import { fromHex } from "@cosmjs/encoding";
import { Secp256k1 } from "@cosmjs/crypto";

describe("Stakebird", () => {
  // test data generate using https://github.com/nym-zone/bech32
  // bech32 -e -h eth 9d4e856e572e442f0a4b2763e72d08a0e99d8ded
  const ethAddressRaw = fromHex("9d4e856e572e442f0a4b2763e72d08a0e99d8ded");

  const privKey = ".....35d36d93bfef4d2ae287";
  const privHexKey = fromHex(privKey);

  describe("publickey", () => {
    it("works", async () => {
      const keypair = await Secp256k1.makeKeypair(privHexKey);
      expect(keypair.pubkey).toEqual(fromHex("adsfasdfsf"));
    });
  });
});
