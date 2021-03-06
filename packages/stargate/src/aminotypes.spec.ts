/* eslint-disable @typescript-eslint/naming-convention */
import { fromBase64 } from "@cosmjs/encoding";
import {
  coin,
  coins,
  encodeBech32Pubkey,
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgMultiSend,
  MsgSend,
  MsgUndelegate,
} from "@cosmjs/launchpad";

import { AminoTypes } from "./aminotypes";
import { cosmos } from "./codec";

type IMsgSend = cosmos.bank.v1beta1.IMsgSend;
type IMsgMultiSend = cosmos.bank.v1beta1.IMsgMultiSend;
type IMsgBeginRedelegate = cosmos.staking.v1beta1.IMsgBeginRedelegate;
type IMsgCreateValidator = cosmos.staking.v1beta1.IMsgCreateValidator;
type IMsgDelegate = cosmos.staking.v1beta1.IMsgDelegate;
type IMsgEditValidator = cosmos.staking.v1beta1.IMsgEditValidator;
type IMsgUndelegate = cosmos.staking.v1beta1.IMsgUndelegate;

describe("AminoTypes", () => {
  describe("toAmino", () => {
    it("works for MsgSend", () => {
      const msg: IMsgSend = {
        fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        toAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coins(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: msg,
      });
      const expected: MsgSend = {
        type: "cosmos-sdk/MsgSend",
        value: {
          from_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          to_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coins(1234, "ucosm"),
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgMultiSend", () => {
      const msg: IMsgMultiSend = {
        inputs: [
          { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: coins(1234, "ucosm") },
          { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: coins(5678, "ucosm") },
        ],
        outputs: [
          { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: coins(6000, "ucosm") },
          { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: coins(912, "ucosm") },
        ],
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: msg,
      });
      const expected: MsgMultiSend = {
        type: "cosmos-sdk/MsgMultiSend",
        value: {
          inputs: [
            { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: coins(1234, "ucosm") },
            { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: coins(5678, "ucosm") },
          ],
          outputs: [
            { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: coins(6000, "ucosm") },
            { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: coins(912, "ucosm") },
          ],
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgBeginRedelegate", () => {
      const msg: IMsgBeginRedelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorSrcAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        validatorDstAddress: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
        amount: coin(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: msg,
      });
      const expected: MsgBeginRedelegate = {
        type: "cosmos-sdk/MsgBeginRedelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_src_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          validator_dst_address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
          amount: coin(1234, "ucosm"),
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgCreateValidator", () => {
      const msg: IMsgCreateValidator = {
        description: {
          moniker: "validator",
          identity: "me",
          website: "valid.com",
          securityContact: "Hamburglar",
          details: "...",
        },
        commission: {
          rate: "0.2",
          maxRate: "0.3",
          maxChangeRate: "0.1",
        },
        minSelfDelegation: "123",
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        pubkey: {
          type_url: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64("A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ"),
        },
        value: coin(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: msg,
      });
      const expected: MsgCreateValidator = {
        type: "cosmos-sdk/MsgCreateValidator",
        value: {
          description: {
            moniker: "validator",
            identity: "me",
            website: "valid.com",
            security_contact: "Hamburglar",
            details: "...",
          },
          commission: {
            rate: "0.2",
            max_rate: "0.3",
            max_change_rate: "0.1",
          },
          min_self_delegation: "123",
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          pubkey: encodeBech32Pubkey(
            { type: "tendermint/PubKeySecp256k1", value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ" },
            "cosmos",
          ),
          value: coin(1234, "ucosm"),
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgDelegate", () => {
      const msg: IMsgDelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coin(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: msg,
      });
      const expected: MsgDelegate = {
        type: "cosmos-sdk/MsgDelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coin(1234, "ucosm"),
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgEditValidator", () => {
      const msg: IMsgEditValidator = {
        description: {
          moniker: "validator",
          identity: "me",
          website: "valid.com",
          securityContact: "Hamburglar",
          details: "...",
        },
        commissionRate: "0.2",
        minSelfDelegation: "123",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: msg,
      });
      const expected: MsgEditValidator = {
        type: "cosmos-sdk/MsgEditValidator",
        value: {
          description: {
            moniker: "validator",
            identity: "me",
            website: "valid.com",
            security_contact: "Hamburglar",
            details: "...",
          },
          commission_rate: "0.2",
          min_self_delegation: "123",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgUndelegate", () => {
      const msg: IMsgUndelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coin(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes().toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: msg,
      });
      const expected: MsgUndelegate = {
        type: "cosmos-sdk/MsgUndelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coin(1234, "ucosm"),
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works with custom type url", () => {
      const msg = {
        foo: "bar",
      };
      const aminoMsg = new AminoTypes({
        additions: {
          "/my.CustomType": {
            aminoType: "my-sdk/CustomType",
            toAmino: ({
              foo,
            }: {
              readonly foo: string;
            }): { readonly foo: string; readonly constant: string } => ({
              foo: `amino-prefix-${foo}`,
              constant: "something-for-amino",
            }),
            fromAmino: () => {},
          },
        },
      }).toAmino({ typeUrl: "/my.CustomType", value: msg });
      expect(aminoMsg).toEqual({
        type: "my-sdk/CustomType",
        value: {
          foo: "amino-prefix-bar",
          constant: "something-for-amino",
        },
      });
    });

    it("works with overridden type url", () => {
      const msg: IMsgDelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coin(1234, "ucosm"),
      };
      const aminoMsg = new AminoTypes({
        additions: {
          "/cosmos.staking.v1beta1.MsgDelegate": {
            aminoType: "my-override/MsgDelegate",
            toAmino: (m: IMsgDelegate): { readonly foo: string } => ({
              foo: m.delegatorAddress ?? "",
            }),
            fromAmino: () => {},
          },
        },
      }).toAmino({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: msg,
      });
      const expected = {
        type: "my-override/MsgDelegate",
        value: {
          foo: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("throws for unknown type url", () => {
      expect(() => new AminoTypes().toAmino({ typeUrl: "/xxx.Unknown", value: { foo: "bar" } })).toThrowError(
        /Type URL does not exist in the Amino message type register./i,
      );
    });
  });

  describe("fromAmino", () => {
    it("works for MsgSend", () => {
      const aminoMsg: MsgSend = {
        type: "cosmos-sdk/MsgSend",
        value: {
          from_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          to_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coins(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgSend = {
        fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        toAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coins(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: expectedValue,
      });
    });

    it("works for MsgMultiSend", () => {
      const aminoMsg: MsgMultiSend = {
        type: "cosmos-sdk/MsgMultiSend",
        value: {
          inputs: [
            { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: coins(1234, "ucosm") },
            { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: coins(5678, "ucosm") },
          ],
          outputs: [
            { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: coins(6000, "ucosm") },
            { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: coins(912, "ucosm") },
          ],
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgMultiSend = {
        inputs: [
          { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: coins(1234, "ucosm") },
          { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: coins(5678, "ucosm") },
        ],
        outputs: [
          { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: coins(6000, "ucosm") },
          { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: coins(912, "ucosm") },
        ],
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: expectedValue,
      });
    });

    it("works for MsgBeginRedelegate", () => {
      const aminoMsg: MsgBeginRedelegate = {
        type: "cosmos-sdk/MsgBeginRedelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_src_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          validator_dst_address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
          amount: coin(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgBeginRedelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorSrcAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        validatorDstAddress: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
        amount: coin(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: expectedValue,
      });
    });

    it("works for MsgCreateValidator", () => {
      const aminoMsg: MsgCreateValidator = {
        type: "cosmos-sdk/MsgCreateValidator",
        value: {
          description: {
            moniker: "validator",
            identity: "me",
            website: "valid.com",
            security_contact: "Hamburglar",
            details: "...",
          },
          commission: {
            rate: "0.2",
            max_rate: "0.3",
            max_change_rate: "0.1",
          },
          min_self_delegation: "123",
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          pubkey: encodeBech32Pubkey(
            { type: "tendermint/PubKeySecp256k1", value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ" },
            "cosmos",
          ),
          value: coin(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgCreateValidator = {
        description: {
          moniker: "validator",
          identity: "me",
          website: "valid.com",
          securityContact: "Hamburglar",
          details: "...",
        },
        commission: {
          rate: "0.2",
          maxRate: "0.3",
          maxChangeRate: "0.1",
        },
        minSelfDelegation: "123",
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        pubkey: {
          type_url: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64("A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ"),
        },
        value: coin(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: expectedValue,
      });
    });

    it("works for MsgDelegate", () => {
      const aminoMsg: MsgDelegate = {
        type: "cosmos-sdk/MsgDelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coin(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgDelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coin(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: expectedValue,
      });
    });

    it("works for MsgEditValidator", () => {
      const aminoMsg: MsgEditValidator = {
        type: "cosmos-sdk/MsgEditValidator",
        value: {
          description: {
            moniker: "validator",
            identity: "me",
            website: "valid.com",
            security_contact: "Hamburglar",
            details: "...",
          },
          commission_rate: "0.2",
          min_self_delegation: "123",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgEditValidator = {
        description: {
          moniker: "validator",
          identity: "me",
          website: "valid.com",
          securityContact: "Hamburglar",
          details: "...",
        },
        commissionRate: "0.2",
        minSelfDelegation: "123",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: expectedValue,
      });
    });

    it("works for MsgUndelegate", () => {
      const aminoMsg: MsgUndelegate = {
        type: "cosmos-sdk/MsgUndelegate",
        value: {
          delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coin(1234, "ucosm"),
        },
      };
      const msg = new AminoTypes().fromAmino(aminoMsg);
      const expectedValue: IMsgUndelegate = {
        delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
        amount: coin(1234, "ucosm"),
      };
      expect(msg).toEqual({
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: expectedValue,
      });
    });

    it("works for custom type url", () => {
      const aminoMsg = {
        type: "my-sdk/CustomType",
        value: {
          foo: "amino-prefix-bar",
          constant: "something-for-amino",
        },
      };
      const msg = new AminoTypes({
        additions: {
          "/my.CustomType": {
            aminoType: "my-sdk/CustomType",
            toAmino: () => {},
            fromAmino: ({ foo }: { readonly foo: string; readonly constant: string }): any => ({
              foo: foo.slice(13),
            }),
          },
        },
      }).fromAmino(aminoMsg);
      const expectedValue = {
        foo: "bar",
      };
      expect(msg).toEqual({
        typeUrl: "/my.CustomType",
        value: expectedValue,
      });
    });

    it("works with overridden type url", () => {
      const msg = new AminoTypes({
        additions: {
          "/my.OverrideType": {
            aminoType: "cosmos-sdk/MsgDelegate",
            toAmino: () => {},
            fromAmino: ({ foo }: { readonly foo: string }): IMsgDelegate => ({
              delegatorAddress: foo,
              validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
              amount: coin(1234, "ucosm"),
            }),
          },
        },
      }).fromAmino({
        type: "cosmos-sdk/MsgDelegate",
        value: {
          foo: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        },
      });
      const expected: { readonly typeUrl: "/my.OverrideType"; readonly value: IMsgDelegate } = {
        typeUrl: "/my.OverrideType",
        value: {
          delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
          amount: coin(1234, "ucosm"),
        },
      };
      expect(msg).toEqual(expected);
    });

    it("throws for unknown type url", () => {
      expect(() =>
        new AminoTypes().fromAmino({ type: "cosmos-sdk/MsgUnknown", value: { foo: "bar" } }),
      ).toThrowError(/Type does not exist in the Amino message type register./i);
    });
  });
});
