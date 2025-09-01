export const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F' as const
export const USDC = '0xdAC17F958D2ee523a2206206994597C13D831ec7' as const

export const ERC20_ABI = [
  { "type":"function","name":"balanceOf","stateMutability":"view","inputs":[{"name":"a","type":"address"}],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"decimals","stateMutability":"view","inputs":[],"outputs":[{"type":"uint8"}]},
  { "type":"function","name":"symbol","stateMutability":"view","inputs":[],"outputs":[{"type":"string"}]},
  { "type":"function","name":"allowance","stateMutability":"view","inputs":[{"name":"o","type":"address"},{"name":"s","type":"address"}],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"approve","stateMutability":"nonpayable","inputs":[{"name":"s","type":"address"},{"name":"amt","type":"uint256"}],"outputs":[{"type":"bool"}]},
  { "type":"function","name":"transfer","stateMutability":"nonpayable","inputs":[{"name":"to","type":"address"},{"name":"amt","type":"uint256"}],"outputs":[{"type":"bool"}]},
  // Mint para tokens de prueba (si el contrato lo expone):
  { "type":"function","name":"mint","stateMutability":"nonpayable","inputs":[{"name":"to","type":"address"},{"name":"amt","type":"uint256"}],"outputs":[]},
  // Eventos:
  { "type":"event","name":"Transfer","inputs":[
    {"name":"from","type":"address","indexed":true},
    {"name":"to","type":"address","indexed":true},
    {"name":"value","type":"uint256","indexed":false}]},
  { "type":"event","name":"Approval","inputs":[
    {"name":"owner","type":"address","indexed":true},
    {"name":"spender","type":"address","indexed":true},
    {"name":"value","type":"uint256","indexed":false}]},
] as const
