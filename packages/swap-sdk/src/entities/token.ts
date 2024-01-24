import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId

  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  }
  if (currencyA instanceof Token) {
    return false
  }
  if (currencyB instanceof Token) {
    return false
  }
  return currencyA === currencyB
}

export const WETH = {
  [ChainId.HyprMainnet]: new Token(
    ChainId.HyprMainnet,
    '0x7374851CEB4A6E573052cA983Ce9CfdBe41f0024',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.HyprTestnet]: new Token(
    ChainId.HyprTestnet,
    '0x7374851CEB4A6E573052cA983Ce9CfdBe41f0024',
    18,
    'WETH',
    'Wrapped WETH'
  ),
  [ChainId.HyprSepoliaTestnet]: new Token(
    ChainId.HyprSepoliaTestnet,
    '0x56E40208FbE3c561132cfc8A829736017a8E7909',
    18,
    'WETH',
    'Wrapped WETH'
  ),
}
