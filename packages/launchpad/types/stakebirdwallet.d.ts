import { StdSignDoc } from "./encoding";
import { AccountData, OfflineSigner, SignResponse } from "./signer";
export declare class StakebirdSigner implements OfflineSigner {
  /**
   * Creates a Stakebird signer from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  static fromPrivateKey(privkey?: Uint8Array, prefix?: string): Promise<StakebirdSigner>;
  private readonly pubkey;
  private readonly privkey;
  private readonly prefix;
  private constructor();
  private get address();
  getAccounts(): Promise<readonly AccountData[]>;
  sign(signerAddress: string, signDoc: StdSignDoc): Promise<SignResponse>;
}
