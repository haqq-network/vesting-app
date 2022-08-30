export function getFormattedAddress(address: string, before = 4, after = 4) {
  return `${address.slice(0, before)}...${address.slice(-1 * after)}`;
}
