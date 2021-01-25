import * as $protobuf from "protobufjs";
/** Namespace cosmos. */
export namespace cosmos {
  /** Namespace bank. */
  namespace bank {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Params. */
      interface IParams {
        /** Params sendEnabled */
        sendEnabled?: cosmos.bank.v1beta1.ISendEnabled[] | null;

        /** Params defaultSendEnabled */
        defaultSendEnabled?: boolean | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IParams);

        /** Params sendEnabled. */
        public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

        /** Params defaultSendEnabled. */
        public defaultSendEnabled: boolean;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IParams): cosmos.bank.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Params;
      }

      /** Properties of a SendEnabled. */
      interface ISendEnabled {
        /** SendEnabled denom */
        denom?: string | null;

        /** SendEnabled enabled */
        enabled?: boolean | null;
      }

      /** Represents a SendEnabled. */
      class SendEnabled implements ISendEnabled {
        /**
         * Constructs a new SendEnabled.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISendEnabled);

        /** SendEnabled denom. */
        public denom: string;

        /** SendEnabled enabled. */
        public enabled: boolean;

        /**
         * Creates a new SendEnabled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEnabled instance
         */
        public static create(properties?: cosmos.bank.v1beta1.ISendEnabled): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
         * @param m SendEnabled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.ISendEnabled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEnabled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendEnabled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.SendEnabled;
      }

      /** Properties of an Input. */
      interface IInput {
        /** Input address */
        address?: string | null;

        /** Input coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Input. */
      class Input implements IInput {
        /**
         * Constructs a new Input.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IInput);

        /** Input address. */
        public address: string;

        /** Input coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IInput): cosmos.bank.v1beta1.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
         * @param m Input message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IInput, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Input;
      }

      /** Properties of an Output. */
      interface IOutput {
        /** Output address */
        address?: string | null;

        /** Output coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Output. */
      class Output implements IOutput {
        /**
         * Constructs a new Output.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IOutput);

        /** Output address. */
        public address: string;

        /** Output coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IOutput): cosmos.bank.v1beta1.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
         * @param m Output message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IOutput, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Output;
      }

      /** Properties of a Supply. */
      interface ISupply {
        /** Supply total */
        total?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Supply. */
      class Supply implements ISupply {
        /**
         * Constructs a new Supply.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISupply);

        /** Supply total. */
        public total: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Supply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Supply instance
         */
        public static create(properties?: cosmos.bank.v1beta1.ISupply): cosmos.bank.v1beta1.Supply;

        /**
         * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
         * @param m Supply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.ISupply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Supply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Supply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Supply;
      }

      /** Properties of a DenomUnit. */
      interface IDenomUnit {
        /** DenomUnit denom */
        denom?: string | null;

        /** DenomUnit exponent */
        exponent?: number | null;

        /** DenomUnit aliases */
        aliases?: string[] | null;
      }

      /** Represents a DenomUnit. */
      class DenomUnit implements IDenomUnit {
        /**
         * Constructs a new DenomUnit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IDenomUnit);

        /** DenomUnit denom. */
        public denom: string;

        /** DenomUnit exponent. */
        public exponent: number;

        /** DenomUnit aliases. */
        public aliases: string[];

        /**
         * Creates a new DenomUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DenomUnit instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IDenomUnit): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
         * @param m DenomUnit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IDenomUnit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DenomUnit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DenomUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.DenomUnit;
      }

      /** Properties of a Metadata. */
      interface IMetadata {
        /** Metadata description */
        description?: string | null;

        /** Metadata denomUnits */
        denomUnits?: cosmos.bank.v1beta1.IDenomUnit[] | null;

        /** Metadata base */
        base?: string | null;

        /** Metadata display */
        display?: string | null;
      }

      /** Represents a Metadata. */
      class Metadata implements IMetadata {
        /**
         * Constructs a new Metadata.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMetadata);

        /** Metadata description. */
        public description: string;

        /** Metadata denomUnits. */
        public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

        /** Metadata base. */
        public base: string;

        /** Metadata display. */
        public display: string;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IMetadata): cosmos.bank.v1beta1.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
         * @param m Metadata message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMetadata, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.Metadata;
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Msg;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgSendResponse
         */
        public send(
          request: cosmos.bank.v1beta1.IMsgSend,
          callback: cosmos.bank.v1beta1.Msg.SendCallback,
        ): void;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @returns Promise
         */
        public send(request: cosmos.bank.v1beta1.IMsgSend): Promise<cosmos.bank.v1beta1.MsgSendResponse>;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgMultiSendResponse
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend,
          callback: cosmos.bank.v1beta1.Msg.MultiSendCallback,
        ): void;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @returns Promise
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend,
        ): Promise<cosmos.bank.v1beta1.MsgMultiSendResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#send}.
         * @param error Error, if any
         * @param [response] MsgSendResponse
         */
        type SendCallback = (error: Error | null, response?: cosmos.bank.v1beta1.MsgSendResponse) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#multiSend}.
         * @param error Error, if any
         * @param [response] MsgMultiSendResponse
         */
        type MultiSendCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.MsgMultiSendResponse,
        ) => void;
      }

      /** Properties of a MsgSend. */
      interface IMsgSend {
        /** MsgSend fromAddress */
        fromAddress?: string | null;

        /** MsgSend toAddress */
        toAddress?: string | null;

        /** MsgSend amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgSend. */
      class MsgSend implements IMsgSend {
        /**
         * Constructs a new MsgSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSend);

        /** MsgSend fromAddress. */
        public fromAddress: string;

        /** MsgSend toAddress. */
        public toAddress: string;

        /** MsgSend amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSend instance
         */
        public static create(properties?: cosmos.bank.v1beta1.IMsgSend): cosmos.bank.v1beta1.MsgSend;

        /**
         * Encodes the specified MsgSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
         * @param m MsgSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgSend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgSend;
      }

      /** Properties of a MsgSendResponse. */
      interface IMsgSendResponse {}

      /** Represents a MsgSendResponse. */
      class MsgSendResponse implements IMsgSendResponse {
        /**
         * Constructs a new MsgSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSendResponse);

        /**
         * Creates a new MsgSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgSendResponse,
        ): cosmos.bank.v1beta1.MsgSendResponse;

        /**
         * Encodes the specified MsgSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
         * @param m MsgSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgSendResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.MsgSendResponse;
      }

      /** Properties of a MsgMultiSend. */
      interface IMsgMultiSend {
        /** MsgMultiSend inputs */
        inputs?: cosmos.bank.v1beta1.IInput[] | null;

        /** MsgMultiSend outputs */
        outputs?: cosmos.bank.v1beta1.IOutput[] | null;
      }

      /** Represents a MsgMultiSend. */
      class MsgMultiSend implements IMsgMultiSend {
        /**
         * Constructs a new MsgMultiSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSend);

        /** MsgMultiSend inputs. */
        public inputs: cosmos.bank.v1beta1.IInput[];

        /** MsgMultiSend outputs. */
        public outputs: cosmos.bank.v1beta1.IOutput[];

        /**
         * Creates a new MsgMultiSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSend instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSend,
        ): cosmos.bank.v1beta1.MsgMultiSend;

        /**
         * Encodes the specified MsgMultiSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
         * @param m MsgMultiSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.bank.v1beta1.IMsgMultiSend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.bank.v1beta1.MsgMultiSend;
      }

      /** Properties of a MsgMultiSendResponse. */
      interface IMsgMultiSendResponse {}

      /** Represents a MsgMultiSendResponse. */
      class MsgMultiSendResponse implements IMsgMultiSendResponse {
        /**
         * Constructs a new MsgMultiSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSendResponse);

        /**
         * Creates a new MsgMultiSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSendResponse,
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;

        /**
         * Encodes the specified MsgMultiSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
         * @param m MsgMultiSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgMultiSendResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;
      }
    }
  }

  /** Namespace base. */
  namespace base {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Coin. */
      interface ICoin {
        /** Coin denom */
        denom?: string | null;

        /** Coin amount */
        amount?: string | null;
      }

      /** Represents a Coin. */
      class Coin implements ICoin {
        /**
         * Constructs a new Coin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.ICoin);

        /** Coin denom. */
        public denom: string;

        /** Coin amount. */
        public amount: string;

        /**
         * Creates a new Coin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coin instance
         */
        public static create(properties?: cosmos.base.v1beta1.ICoin): cosmos.base.v1beta1.Coin;

        /**
         * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
         * @param m Coin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.ICoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.Coin;
      }

      /** Properties of a DecCoin. */
      interface IDecCoin {
        /** DecCoin denom */
        denom?: string | null;

        /** DecCoin amount */
        amount?: string | null;
      }

      /** Represents a DecCoin. */
      class DecCoin implements IDecCoin {
        /**
         * Constructs a new DecCoin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecCoin);

        /** DecCoin denom. */
        public denom: string;

        /** DecCoin amount. */
        public amount: string;

        /**
         * Creates a new DecCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecCoin instance
         */
        public static create(properties?: cosmos.base.v1beta1.IDecCoin): cosmos.base.v1beta1.DecCoin;

        /**
         * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
         * @param m DecCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IDecCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecCoin;
      }

      /** Properties of an IntProto. */
      interface IIntProto {
        /** IntProto int */
        int?: string | null;
      }

      /** Represents an IntProto. */
      class IntProto implements IIntProto {
        /**
         * Constructs a new IntProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IIntProto);

        /** IntProto int. */
        public int: string;

        /**
         * Creates a new IntProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntProto instance
         */
        public static create(properties?: cosmos.base.v1beta1.IIntProto): cosmos.base.v1beta1.IntProto;

        /**
         * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
         * @param m IntProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IIntProto, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IntProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.IntProto;
      }

      /** Properties of a DecProto. */
      interface IDecProto {
        /** DecProto dec */
        dec?: string | null;
      }

      /** Represents a DecProto. */
      class DecProto implements IDecProto {
        /**
         * Constructs a new DecProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecProto);

        /** DecProto dec. */
        public dec: string;

        /**
         * Creates a new DecProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecProto instance
         */
        public static create(properties?: cosmos.base.v1beta1.IDecProto): cosmos.base.v1beta1.DecProto;

        /**
         * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
         * @param m DecProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.base.v1beta1.IDecProto, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.base.v1beta1.DecProto;
      }
    }
  }

  /** Namespace crypto. */
  namespace crypto {
    /** Namespace multisig. */
    namespace multisig {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a MultiSignature. */
        interface IMultiSignature {
          /** MultiSignature signatures */
          signatures?: Uint8Array[] | null;
        }

        /** Represents a MultiSignature. */
        class MultiSignature implements IMultiSignature {
          /**
           * Constructs a new MultiSignature.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.IMultiSignature);

          /** MultiSignature signatures. */
          public signatures: Uint8Array[];

          /**
           * Creates a new MultiSignature instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MultiSignature instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.IMultiSignature,
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;

          /**
           * Encodes the specified MultiSignature message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
           * @param m MultiSignature message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.IMultiSignature,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a MultiSignature message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MultiSignature
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;
        }

        /** Properties of a CompactBitArray. */
        interface ICompactBitArray {
          /** CompactBitArray extraBitsStored */
          extraBitsStored?: number | null;

          /** CompactBitArray elems */
          elems?: Uint8Array | null;
        }

        /** Represents a CompactBitArray. */
        class CompactBitArray implements ICompactBitArray {
          /**
           * Constructs a new CompactBitArray.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.ICompactBitArray);

          /** CompactBitArray extraBitsStored. */
          public extraBitsStored: number;

          /** CompactBitArray elems. */
          public elems: Uint8Array;

          /**
           * Creates a new CompactBitArray instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CompactBitArray instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;

          /**
           * Encodes the specified CompactBitArray message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
           * @param m CompactBitArray message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a CompactBitArray message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns CompactBitArray
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;
        }
      }
    }

    /** Namespace secp256k1. */
    namespace secp256k1 {
      /** Properties of a PubKey. */
      interface IPubKey {
        /** PubKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PubKey. */
      class PubKey implements IPubKey {
        /**
         * Constructs a new PubKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPubKey);

        /** PubKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PubKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PubKey instance
         */
        public static create(properties?: cosmos.crypto.secp256k1.IPubKey): cosmos.crypto.secp256k1.PubKey;

        /**
         * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
         * @param m PubKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.crypto.secp256k1.IPubKey, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PubKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PubKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PubKey;
      }

      /** Properties of a PrivKey. */
      interface IPrivKey {
        /** PrivKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PrivKey. */
      class PrivKey implements IPrivKey {
        /**
         * Constructs a new PrivKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPrivKey);

        /** PrivKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PrivKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivKey instance
         */
        public static create(properties?: cosmos.crypto.secp256k1.IPrivKey): cosmos.crypto.secp256k1.PrivKey;

        /**
         * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
         * @param m PrivKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.crypto.secp256k1.IPrivKey, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PrivKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.crypto.secp256k1.PrivKey;
      }
    }
  }

  /** Namespace tx. */
  namespace tx {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Tx. */
      interface ITx {
        /** Tx body */
        body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo */
        authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a Tx. */
      class Tx implements ITx {
        /**
         * Constructs a new Tx.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITx);

        /** Tx body. */
        public body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo. */
        public authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new Tx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tx instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITx): cosmos.tx.v1beta1.Tx;

        /**
         * Encodes the specified Tx message. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
         * @param m Tx message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITx, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tx message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Tx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Tx;
      }

      /** Properties of a TxRaw. */
      interface ITxRaw {
        /** TxRaw bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** TxRaw authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** TxRaw signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a TxRaw. */
      class TxRaw implements ITxRaw {
        /**
         * Constructs a new TxRaw.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxRaw);

        /** TxRaw bodyBytes. */
        public bodyBytes: Uint8Array;

        /** TxRaw authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** TxRaw signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new TxRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxRaw instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITxRaw): cosmos.tx.v1beta1.TxRaw;

        /**
         * Encodes the specified TxRaw message. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
         * @param m TxRaw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITxRaw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxRaw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxRaw;
      }

      /** Properties of a SignDoc. */
      interface ISignDoc {
        /** SignDoc bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** SignDoc authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** SignDoc chainId */
        chainId?: string | null;

        /** SignDoc accountNumber */
        accountNumber?: Long | null;
      }

      /** Represents a SignDoc. */
      class SignDoc implements ISignDoc {
        /**
         * Constructs a new SignDoc.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignDoc);

        /** SignDoc bodyBytes. */
        public bodyBytes: Uint8Array;

        /** SignDoc authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** SignDoc chainId. */
        public chainId: string;

        /** SignDoc accountNumber. */
        public accountNumber: Long;

        /**
         * Creates a new SignDoc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignDoc instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ISignDoc): cosmos.tx.v1beta1.SignDoc;

        /**
         * Encodes the specified SignDoc message. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
         * @param m SignDoc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ISignDoc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignDoc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignDoc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignDoc;
      }

      /** Properties of a TxBody. */
      interface ITxBody {
        /** TxBody messages */
        messages?: google.protobuf.IAny[] | null;

        /** TxBody memo */
        memo?: string | null;

        /** TxBody timeoutHeight */
        timeoutHeight?: Long | null;

        /** TxBody extensionOptions */
        extensionOptions?: google.protobuf.IAny[] | null;

        /** TxBody nonCriticalExtensionOptions */
        nonCriticalExtensionOptions?: google.protobuf.IAny[] | null;
      }

      /** Represents a TxBody. */
      class TxBody implements ITxBody {
        /**
         * Constructs a new TxBody.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxBody);

        /** TxBody messages. */
        public messages: google.protobuf.IAny[];

        /** TxBody memo. */
        public memo: string;

        /** TxBody timeoutHeight. */
        public timeoutHeight: Long;

        /** TxBody extensionOptions. */
        public extensionOptions: google.protobuf.IAny[];

        /** TxBody nonCriticalExtensionOptions. */
        public nonCriticalExtensionOptions: google.protobuf.IAny[];

        /**
         * Creates a new TxBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxBody instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ITxBody): cosmos.tx.v1beta1.TxBody;

        /**
         * Encodes the specified TxBody message. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
         * @param m TxBody message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ITxBody, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxBody message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.TxBody;
      }

      /** Properties of an AuthInfo. */
      interface IAuthInfo {
        /** AuthInfo signerInfos */
        signerInfos?: cosmos.tx.v1beta1.ISignerInfo[] | null;

        /** AuthInfo fee */
        fee?: cosmos.tx.v1beta1.IFee | null;
      }

      /** Represents an AuthInfo. */
      class AuthInfo implements IAuthInfo {
        /**
         * Constructs a new AuthInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IAuthInfo);

        /** AuthInfo signerInfos. */
        public signerInfos: cosmos.tx.v1beta1.ISignerInfo[];

        /** AuthInfo fee. */
        public fee?: cosmos.tx.v1beta1.IFee | null;

        /**
         * Creates a new AuthInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IAuthInfo): cosmos.tx.v1beta1.AuthInfo;

        /**
         * Encodes the specified AuthInfo message. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
         * @param m AuthInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IAuthInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AuthInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.AuthInfo;
      }

      /** Properties of a SignerInfo. */
      interface ISignerInfo {
        /** SignerInfo publicKey */
        publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo */
        modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence */
        sequence?: Long | null;
      }

      /** Represents a SignerInfo. */
      class SignerInfo implements ISignerInfo {
        /**
         * Constructs a new SignerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignerInfo);

        /** SignerInfo publicKey. */
        public publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo. */
        public modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence. */
        public sequence: Long;

        /**
         * Creates a new SignerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignerInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.ISignerInfo): cosmos.tx.v1beta1.SignerInfo;

        /**
         * Encodes the specified SignerInfo message. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
         * @param m SignerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.ISignerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.SignerInfo;
      }

      /** Properties of a ModeInfo. */
      interface IModeInfo {
        /** ModeInfo single */
        single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi */
        multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;
      }

      /** Represents a ModeInfo. */
      class ModeInfo implements IModeInfo {
        /**
         * Constructs a new ModeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IModeInfo);

        /** ModeInfo single. */
        public single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi. */
        public multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;

        /** ModeInfo sum. */
        public sum?: "single" | "multi";

        /**
         * Creates a new ModeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModeInfo instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IModeInfo): cosmos.tx.v1beta1.ModeInfo;

        /**
         * Encodes the specified ModeInfo message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
         * @param m ModeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IModeInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.ModeInfo;
      }

      namespace ModeInfo {
        /** Properties of a Single. */
        interface ISingle {
          /** Single mode */
          mode?: cosmos.tx.signing.v1beta1.SignMode | null;
        }

        /** Represents a Single. */
        class Single implements ISingle {
          /**
           * Constructs a new Single.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.ISingle);

          /** Single mode. */
          public mode: cosmos.tx.signing.v1beta1.SignMode;

          /**
           * Creates a new Single instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Single instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.ISingle,
          ): cosmos.tx.v1beta1.ModeInfo.Single;

          /**
           * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
           * @param m Single message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.tx.v1beta1.ModeInfo.ISingle, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Single message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Single
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.v1beta1.ModeInfo.Single;
        }

        /** Properties of a Multi. */
        interface IMulti {
          /** Multi bitarray */
          bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos */
          modeInfos?: cosmos.tx.v1beta1.IModeInfo[] | null;
        }

        /** Represents a Multi. */
        class Multi implements IMulti {
          /**
           * Constructs a new Multi.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.IMulti);

          /** Multi bitarray. */
          public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos. */
          public modeInfos: cosmos.tx.v1beta1.IModeInfo[];

          /**
           * Creates a new Multi instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Multi instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.IMulti,
          ): cosmos.tx.v1beta1.ModeInfo.Multi;

          /**
           * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
           * @param m Multi message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: cosmos.tx.v1beta1.ModeInfo.IMulti, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Multi message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Multi
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.v1beta1.ModeInfo.Multi;
        }
      }

      /** Properties of a Fee. */
      interface IFee {
        /** Fee amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;

        /** Fee gasLimit */
        gasLimit?: Long | null;

        /** Fee payer */
        payer?: string | null;

        /** Fee granter */
        granter?: string | null;
      }

      /** Represents a Fee. */
      class Fee implements IFee {
        /**
         * Constructs a new Fee.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IFee);

        /** Fee amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /** Fee gasLimit. */
        public gasLimit: Long;

        /** Fee payer. */
        public payer: string;

        /** Fee granter. */
        public granter: string;

        /**
         * Creates a new Fee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fee instance
         */
        public static create(properties?: cosmos.tx.v1beta1.IFee): cosmos.tx.v1beta1.Fee;

        /**
         * Encodes the specified Fee message. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
         * @param m Fee message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.tx.v1beta1.IFee, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fee message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Fee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.tx.v1beta1.Fee;
      }
    }

    /** Namespace signing. */
    namespace signing {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** SignMode enum. */
        enum SignMode {
          SIGN_MODE_UNSPECIFIED = 0,
          SIGN_MODE_DIRECT = 1,
          SIGN_MODE_TEXTUAL = 2,
          SIGN_MODE_LEGACY_AMINO_JSON = 127,
        }

        /** Properties of a SignatureDescriptors. */
        interface ISignatureDescriptors {
          /** SignatureDescriptors signatures */
          signatures?: cosmos.tx.signing.v1beta1.ISignatureDescriptor[] | null;
        }

        /** Represents a SignatureDescriptors. */
        class SignatureDescriptors implements ISignatureDescriptors {
          /**
           * Constructs a new SignatureDescriptors.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptors);

          /** SignatureDescriptors signatures. */
          public signatures: cosmos.tx.signing.v1beta1.ISignatureDescriptor[];

          /**
           * Creates a new SignatureDescriptors instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptors instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;

          /**
           * Encodes the specified SignatureDescriptors message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
           * @param m SignatureDescriptors message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptors message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptors
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;
        }

        /** Properties of a SignatureDescriptor. */
        interface ISignatureDescriptor {
          /** SignatureDescriptor publicKey */
          publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data */
          data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence */
          sequence?: Long | null;
        }

        /** Represents a SignatureDescriptor. */
        class SignatureDescriptor implements ISignatureDescriptor {
          /**
           * Constructs a new SignatureDescriptor.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptor);

          /** SignatureDescriptor publicKey. */
          public publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data. */
          public data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence. */
          public sequence: Long;

          /**
           * Creates a new SignatureDescriptor instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptor instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;

          /**
           * Encodes the specified SignatureDescriptor message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
           * @param m SignatureDescriptor message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptor message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptor
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;
        }

        namespace SignatureDescriptor {
          /** Properties of a Data. */
          interface IData {
            /** Data single */
            single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi */
            multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;
          }

          /** Represents a Data. */
          class Data implements IData {
            /**
             * Constructs a new Data.
             * @param [p] Properties to set
             */
            constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData);

            /** Data single. */
            public single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi. */
            public multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;

            /** Data sum. */
            public sum?: "single" | "multi";

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(
              properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
             * @param m Data message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(
              m: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
              w?: $protobuf.Writer,
            ): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              r: $protobuf.Reader | Uint8Array,
              l?: number,
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;
          }

          namespace Data {
            /** Properties of a Single. */
            interface ISingle {
              /** Single mode */
              mode?: cosmos.tx.signing.v1beta1.SignMode | null;

              /** Single signature */
              signature?: Uint8Array | null;
            }

            /** Represents a Single. */
            class Single implements ISingle {
              /**
               * Constructs a new Single.
               * @param [p] Properties to set
               */
              constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle);

              /** Single mode. */
              public mode: cosmos.tx.signing.v1beta1.SignMode;

              /** Single signature. */
              public signature: Uint8Array;

              /**
               * Creates a new Single instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Single instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

              /**
               * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
               * @param m Single message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
                w?: $protobuf.Writer,
              ): $protobuf.Writer;

              /**
               * Decodes a Single message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Single
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;
            }

            /** Properties of a Multi. */
            interface IMulti {
              /** Multi bitarray */
              bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures */
              signatures?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[] | null;
            }

            /** Represents a Multi. */
            class Multi implements IMulti {
              /**
               * Constructs a new Multi.
               * @param [p] Properties to set
               */
              constructor(p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti);

              /** Multi bitarray. */
              public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures. */
              public signatures: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[];

              /**
               * Creates a new Multi instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Multi instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

              /**
               * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
               * @param m Multi message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
                w?: $protobuf.Writer,
              ): $protobuf.Writer;

              /**
               * Decodes a Multi message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Multi
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number,
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;
            }
          }
        }
      }
    }
  }

  /** Namespace gov. */
  namespace gov {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** VoteOption enum. */
      enum VoteOption {
        VOTE_OPTION_UNSPECIFIED = 0,
        VOTE_OPTION_YES = 1,
        VOTE_OPTION_ABSTAIN = 2,
        VOTE_OPTION_NO = 3,
        VOTE_OPTION_NO_WITH_VETO = 4,
      }

      /** Properties of a TextProposal. */
      interface ITextProposal {
        /** TextProposal title */
        title?: string | null;

        /** TextProposal description */
        description?: string | null;
      }

      /** Represents a TextProposal. */
      class TextProposal implements ITextProposal {
        /**
         * Constructs a new TextProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITextProposal);

        /** TextProposal title. */
        public title: string;

        /** TextProposal description. */
        public description: string;

        /**
         * Creates a new TextProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextProposal instance
         */
        public static create(properties?: cosmos.gov.v1beta1.ITextProposal): cosmos.gov.v1beta1.TextProposal;

        /**
         * Encodes the specified TextProposal message. Does not implicitly {@link cosmos.gov.v1beta1.TextProposal.verify|verify} messages.
         * @param m TextProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.ITextProposal, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TextProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TextProposal;
      }

      /** Properties of a Deposit. */
      interface IDeposit {
        /** Deposit proposalId */
        proposalId?: Long | null;

        /** Deposit depositor */
        depositor?: string | null;

        /** Deposit amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Deposit. */
      class Deposit implements IDeposit {
        /**
         * Constructs a new Deposit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IDeposit);

        /** Deposit proposalId. */
        public proposalId: Long;

        /** Deposit depositor. */
        public depositor: string;

        /** Deposit amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Deposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Deposit instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IDeposit): cosmos.gov.v1beta1.Deposit;

        /**
         * Encodes the specified Deposit message. Does not implicitly {@link cosmos.gov.v1beta1.Deposit.verify|verify} messages.
         * @param m Deposit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IDeposit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Deposit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Deposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Deposit;
      }

      /** Properties of a Proposal. */
      interface IProposal {
        /** Proposal proposalId */
        proposalId?: Long | null;

        /** Proposal content */
        content?: google.protobuf.IAny | null;

        /** Proposal status */
        status?: cosmos.gov.v1beta1.ProposalStatus | null;

        /** Proposal finalTallyResult */
        finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

        /** Proposal submitTime */
        submitTime?: google.protobuf.ITimestamp | null;

        /** Proposal depositEndTime */
        depositEndTime?: google.protobuf.ITimestamp | null;

        /** Proposal totalDeposit */
        totalDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** Proposal votingStartTime */
        votingStartTime?: google.protobuf.ITimestamp | null;

        /** Proposal votingEndTime */
        votingEndTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a Proposal. */
      class Proposal implements IProposal {
        /**
         * Constructs a new Proposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IProposal);

        /** Proposal proposalId. */
        public proposalId: Long;

        /** Proposal content. */
        public content?: google.protobuf.IAny | null;

        /** Proposal status. */
        public status: cosmos.gov.v1beta1.ProposalStatus;

        /** Proposal finalTallyResult. */
        public finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

        /** Proposal submitTime. */
        public submitTime?: google.protobuf.ITimestamp | null;

        /** Proposal depositEndTime. */
        public depositEndTime?: google.protobuf.ITimestamp | null;

        /** Proposal totalDeposit. */
        public totalDeposit: cosmos.base.v1beta1.ICoin[];

        /** Proposal votingStartTime. */
        public votingStartTime?: google.protobuf.ITimestamp | null;

        /** Proposal votingEndTime. */
        public votingEndTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new Proposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Proposal instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IProposal): cosmos.gov.v1beta1.Proposal;

        /**
         * Encodes the specified Proposal message. Does not implicitly {@link cosmos.gov.v1beta1.Proposal.verify|verify} messages.
         * @param m Proposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IProposal, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Proposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Proposal;
      }

      /** ProposalStatus enum. */
      enum ProposalStatus {
        PROPOSAL_STATUS_UNSPECIFIED = 0,
        PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
        PROPOSAL_STATUS_VOTING_PERIOD = 2,
        PROPOSAL_STATUS_PASSED = 3,
        PROPOSAL_STATUS_REJECTED = 4,
        PROPOSAL_STATUS_FAILED = 5,
      }

      /** Properties of a TallyResult. */
      interface ITallyResult {
        /** TallyResult yes */
        yes?: string | null;

        /** TallyResult abstain */
        abstain?: string | null;

        /** TallyResult no */
        no?: string | null;

        /** TallyResult noWithVeto */
        noWithVeto?: string | null;
      }

      /** Represents a TallyResult. */
      class TallyResult implements ITallyResult {
        /**
         * Constructs a new TallyResult.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITallyResult);

        /** TallyResult yes. */
        public yes: string;

        /** TallyResult abstain. */
        public abstain: string;

        /** TallyResult no. */
        public no: string;

        /** TallyResult noWithVeto. */
        public noWithVeto: string;

        /**
         * Creates a new TallyResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TallyResult instance
         */
        public static create(properties?: cosmos.gov.v1beta1.ITallyResult): cosmos.gov.v1beta1.TallyResult;

        /**
         * Encodes the specified TallyResult message. Does not implicitly {@link cosmos.gov.v1beta1.TallyResult.verify|verify} messages.
         * @param m TallyResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.ITallyResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TallyResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TallyResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TallyResult;
      }

      /** Properties of a Vote. */
      interface IVote {
        /** Vote proposalId */
        proposalId?: Long | null;

        /** Vote voter */
        voter?: string | null;

        /** Vote option */
        option?: cosmos.gov.v1beta1.VoteOption | null;
      }

      /** Represents a Vote. */
      class Vote implements IVote {
        /**
         * Constructs a new Vote.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IVote);

        /** Vote proposalId. */
        public proposalId: Long;

        /** Vote voter. */
        public voter: string;

        /** Vote option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /**
         * Creates a new Vote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vote instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IVote): cosmos.gov.v1beta1.Vote;

        /**
         * Encodes the specified Vote message. Does not implicitly {@link cosmos.gov.v1beta1.Vote.verify|verify} messages.
         * @param m Vote message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IVote, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.Vote;
      }

      /** Properties of a DepositParams. */
      interface IDepositParams {
        /** DepositParams minDeposit */
        minDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** DepositParams maxDepositPeriod */
        maxDepositPeriod?: google.protobuf.IDuration | null;
      }

      /** Represents a DepositParams. */
      class DepositParams implements IDepositParams {
        /**
         * Constructs a new DepositParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IDepositParams);

        /** DepositParams minDeposit. */
        public minDeposit: cosmos.base.v1beta1.ICoin[];

        /** DepositParams maxDepositPeriod. */
        public maxDepositPeriod?: google.protobuf.IDuration | null;

        /**
         * Creates a new DepositParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DepositParams instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IDepositParams,
        ): cosmos.gov.v1beta1.DepositParams;

        /**
         * Encodes the specified DepositParams message. Does not implicitly {@link cosmos.gov.v1beta1.DepositParams.verify|verify} messages.
         * @param m DepositParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IDepositParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DepositParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DepositParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.DepositParams;
      }

      /** Properties of a VotingParams. */
      interface IVotingParams {
        /** VotingParams votingPeriod */
        votingPeriod?: google.protobuf.IDuration | null;
      }

      /** Represents a VotingParams. */
      class VotingParams implements IVotingParams {
        /**
         * Constructs a new VotingParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IVotingParams);

        /** VotingParams votingPeriod. */
        public votingPeriod?: google.protobuf.IDuration | null;

        /**
         * Creates a new VotingParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VotingParams instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IVotingParams): cosmos.gov.v1beta1.VotingParams;

        /**
         * Encodes the specified VotingParams message. Does not implicitly {@link cosmos.gov.v1beta1.VotingParams.verify|verify} messages.
         * @param m VotingParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IVotingParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VotingParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VotingParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.VotingParams;
      }

      /** Properties of a TallyParams. */
      interface ITallyParams {
        /** TallyParams quorum */
        quorum?: Uint8Array | null;

        /** TallyParams threshold */
        threshold?: Uint8Array | null;

        /** TallyParams vetoThreshold */
        vetoThreshold?: Uint8Array | null;
      }

      /** Represents a TallyParams. */
      class TallyParams implements ITallyParams {
        /**
         * Constructs a new TallyParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITallyParams);

        /** TallyParams quorum. */
        public quorum: Uint8Array;

        /** TallyParams threshold. */
        public threshold: Uint8Array;

        /** TallyParams vetoThreshold. */
        public vetoThreshold: Uint8Array;

        /**
         * Creates a new TallyParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TallyParams instance
         */
        public static create(properties?: cosmos.gov.v1beta1.ITallyParams): cosmos.gov.v1beta1.TallyParams;

        /**
         * Encodes the specified TallyParams message. Does not implicitly {@link cosmos.gov.v1beta1.TallyParams.verify|verify} messages.
         * @param m TallyParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.ITallyParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TallyParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TallyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.TallyParams;
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean,
        ): Msg;

        /**
         * Calls SubmitProposal.
         * @param request MsgSubmitProposal message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgSubmitProposalResponse
         */
        public submitProposal(
          request: cosmos.gov.v1beta1.IMsgSubmitProposal,
          callback: cosmos.gov.v1beta1.Msg.SubmitProposalCallback,
        ): void;

        /**
         * Calls SubmitProposal.
         * @param request MsgSubmitProposal message or plain object
         * @returns Promise
         */
        public submitProposal(
          request: cosmos.gov.v1beta1.IMsgSubmitProposal,
        ): Promise<cosmos.gov.v1beta1.MsgSubmitProposalResponse>;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgVoteResponse
         */
        public vote(
          request: cosmos.gov.v1beta1.IMsgVote,
          callback: cosmos.gov.v1beta1.Msg.VoteCallback,
        ): void;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @returns Promise
         */
        public vote(request: cosmos.gov.v1beta1.IMsgVote): Promise<cosmos.gov.v1beta1.MsgVoteResponse>;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgDepositResponse
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit,
          callback: cosmos.gov.v1beta1.Msg.DepositCallback,
        ): void;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @returns Promise
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit,
        ): Promise<cosmos.gov.v1beta1.MsgDepositResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#submitProposal}.
         * @param error Error, if any
         * @param [response] MsgSubmitProposalResponse
         */
        type SubmitProposalCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgSubmitProposalResponse,
        ) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#vote}.
         * @param error Error, if any
         * @param [response] MsgVoteResponse
         */
        type VoteCallback = (error: Error | null, response?: cosmos.gov.v1beta1.MsgVoteResponse) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#deposit}.
         * @param error Error, if any
         * @param [response] MsgDepositResponse
         */
        type DepositCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgDepositResponse,
        ) => void;
      }

      /** Properties of a MsgSubmitProposal. */
      interface IMsgSubmitProposal {
        /** MsgSubmitProposal content */
        content?: google.protobuf.IAny | null;

        /** MsgSubmitProposal initialDeposit */
        initialDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** MsgSubmitProposal proposer */
        proposer?: string | null;
      }

      /** Represents a MsgSubmitProposal. */
      class MsgSubmitProposal implements IMsgSubmitProposal {
        /**
         * Constructs a new MsgSubmitProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposal);

        /** MsgSubmitProposal content. */
        public content?: google.protobuf.IAny | null;

        /** MsgSubmitProposal initialDeposit. */
        public initialDeposit: cosmos.base.v1beta1.ICoin[];

        /** MsgSubmitProposal proposer. */
        public proposer: string;

        /**
         * Creates a new MsgSubmitProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSubmitProposal instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgSubmitProposal,
        ): cosmos.gov.v1beta1.MsgSubmitProposal;

        /**
         * Encodes the specified MsgSubmitProposal message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposal.verify|verify} messages.
         * @param m MsgSubmitProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgSubmitProposal,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSubmitProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSubmitProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.gov.v1beta1.MsgSubmitProposal;
      }

      /** Properties of a MsgSubmitProposalResponse. */
      interface IMsgSubmitProposalResponse {
        /** MsgSubmitProposalResponse proposalId */
        proposalId?: Long | null;
      }

      /** Represents a MsgSubmitProposalResponse. */
      class MsgSubmitProposalResponse implements IMsgSubmitProposalResponse {
        /**
         * Constructs a new MsgSubmitProposalResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse);

        /** MsgSubmitProposalResponse proposalId. */
        public proposalId: Long;

        /**
         * Creates a new MsgSubmitProposalResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSubmitProposalResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse,
        ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;

        /**
         * Encodes the specified MsgSubmitProposalResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposalResponse.verify|verify} messages.
         * @param m MsgSubmitProposalResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgSubmitProposalResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSubmitProposalResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSubmitProposalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;
      }

      /** Properties of a MsgVote. */
      interface IMsgVote {
        /** MsgVote proposalId */
        proposalId?: Long | null;

        /** MsgVote voter */
        voter?: string | null;

        /** MsgVote option */
        option?: cosmos.gov.v1beta1.VoteOption | null;
      }

      /** Represents a MsgVote. */
      class MsgVote implements IMsgVote {
        /**
         * Constructs a new MsgVote.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVote);

        /** MsgVote proposalId. */
        public proposalId: Long;

        /** MsgVote voter. */
        public voter: string;

        /** MsgVote option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /**
         * Creates a new MsgVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVote instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IMsgVote): cosmos.gov.v1beta1.MsgVote;

        /**
         * Encodes the specified MsgVote message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVote.verify|verify} messages.
         * @param m MsgVote message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IMsgVote, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgVote message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgVote;
      }

      /** Properties of a MsgVoteResponse. */
      interface IMsgVoteResponse {}

      /** Represents a MsgVoteResponse. */
      class MsgVoteResponse implements IMsgVoteResponse {
        /**
         * Constructs a new MsgVoteResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVoteResponse);

        /**
         * Creates a new MsgVoteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVoteResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVoteResponse,
        ): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Encodes the specified MsgVoteResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteResponse.verify|verify} messages.
         * @param m MsgVoteResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IMsgVoteResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgVoteResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.gov.v1beta1.MsgVoteResponse;
      }

      /** Properties of a MsgDeposit. */
      interface IMsgDeposit {
        /** MsgDeposit proposalId */
        proposalId?: Long | null;

        /** MsgDeposit depositor */
        depositor?: string | null;

        /** MsgDeposit amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgDeposit. */
      class MsgDeposit implements IMsgDeposit {
        /**
         * Constructs a new MsgDeposit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDeposit);

        /** MsgDeposit proposalId. */
        public proposalId: Long;

        /** MsgDeposit depositor. */
        public depositor: string;

        /** MsgDeposit amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDeposit instance
         */
        public static create(properties?: cosmos.gov.v1beta1.IMsgDeposit): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Encodes the specified MsgDeposit message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDeposit.verify|verify} messages.
         * @param m MsgDeposit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: cosmos.gov.v1beta1.IMsgDeposit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgDeposit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: $protobuf.Reader | Uint8Array, l?: number): cosmos.gov.v1beta1.MsgDeposit;
      }

      /** Properties of a MsgDepositResponse. */
      interface IMsgDepositResponse {}

      /** Represents a MsgDepositResponse. */
      class MsgDepositResponse implements IMsgDepositResponse {
        /**
         * Constructs a new MsgDepositResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDepositResponse);

        /**
         * Creates a new MsgDepositResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDepositResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgDepositResponse,
        ): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Encodes the specified MsgDepositResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDepositResponse.verify|verify} messages.
         * @param m MsgDepositResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgDepositResponse,
          w?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDepositResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDepositResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number,
        ): cosmos.gov.v1beta1.MsgDepositResponse;
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of an Any. */
    interface IAny {
      /** Any type_url */
      type_url?: string | null;

      /** Any value */
      value?: Uint8Array | null;
    }

    /** Represents an Any. */
    class Any implements IAny {
      /**
       * Constructs a new Any.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IAny);

      /** Any type_url. */
      public type_url: string;

      /** Any value. */
      public value: Uint8Array;

      /**
       * Creates a new Any instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Any instance
       */
      public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param m Any message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IAny, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an Any message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Any;
    }

    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param m Timestamp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Timestamp;
    }

    /** Properties of a Duration. */
    interface IDuration {
      /** Duration seconds */
      seconds?: Long | null;

      /** Duration nanos */
      nanos?: number | null;
    }

    /** Represents a Duration. */
    class Duration implements IDuration {
      /**
       * Constructs a new Duration.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IDuration);

      /** Duration seconds. */
      public seconds: Long;

      /** Duration nanos. */
      public nanos: number;

      /**
       * Creates a new Duration instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Duration instance
       */
      public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

      /**
       * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
       * @param m Duration message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: google.protobuf.IDuration, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a Duration message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Duration
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): google.protobuf.Duration;
    }
  }
}

/** Namespace tendermint. */
export namespace tendermint {
  /** Namespace crypto. */
  namespace crypto {
    /** Properties of a PublicKey. */
    interface IPublicKey {
      /** PublicKey ed25519 */
      ed25519?: Uint8Array | null;

      /** PublicKey secp256k1 */
      secp256k1?: Uint8Array | null;
    }

    /** Represents a PublicKey. */
    class PublicKey implements IPublicKey {
      /**
       * Constructs a new PublicKey.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IPublicKey);

      /** PublicKey ed25519. */
      public ed25519: Uint8Array;

      /** PublicKey secp256k1. */
      public secp256k1: Uint8Array;

      /** PublicKey sum. */
      public sum?: "ed25519" | "secp256k1";

      /**
       * Creates a new PublicKey instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PublicKey instance
       */
      public static create(properties?: tendermint.crypto.IPublicKey): tendermint.crypto.PublicKey;

      /**
       * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
       * @param m PublicKey message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(m: tendermint.crypto.IPublicKey, w?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a PublicKey message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns PublicKey
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(r: $protobuf.Reader | Uint8Array, l?: number): tendermint.crypto.PublicKey;
    }
  }
}
