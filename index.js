const axios = require('axios');
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/V9QniLcFpQjrpYVQITelw1cZY5Jspg60";

async function transactionCount(){
  const latest_block = await axios.post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockTransactionCountByNumber",
    params: ["finalized"]
  
  }).then((response) => {
    console.log(response.data.result);
  });
}

console.log(transactionCount())
module.exports = transactionCount
