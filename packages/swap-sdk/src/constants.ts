import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}
export enum CHAINKEY {
  HYPR = 'ETH',
  // OPTIMISTIC = 'OPTIMISTIC',
  // ARBITRUM = 'ARBITRUM',
  // POLYGON = 'POLYGON',
  // AVALANCH = 'AVALANCH',
  // FANTOM = 'FANTOM',
  // THETA = 'THETA',
}
export enum ChainId {
  HyprSepoliaTestnet = 882,
  HyprTestnet = 60005,
  HyprMainnet = 1206,
}
export const FACTORY_ADDRESS: Record<ChainId, string> = {
  [ChainId.HyprTestnet]: '0x438e0bfc3209ac3b909a1a92a5948600af29DCd3',
  [ChainId.HyprSepoliaTestnet]: '0xB916c39a4fF1d8bEcB320a7543B884DA0668FFb8',
  [ChainId.HyprMainnet]: '',
}
export const INIT_CODE_HASH: Record<ChainId, string> = {
  [ChainId.HyprTestnet]: '0x8c206ab4023786ea32e3162b1c45d0fffd3ae974a8760ebd63ba9820be5f5e9e',
  [ChainId.HyprSepoliaTestnet]: '0x4fb3e16fc0f4ca37e27bf4dd619846e053c566658ab2cafe20e6a18e6d1f8e00',
  [ChainId.HyprMainnet]: '',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
