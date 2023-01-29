const axios = require('axios');
const ALCHEMY_URL = "";

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
