const axios = require('axios');
const ALCHEMY_URL = "";

async function transactionCount(){
    
  const latest_block = {

    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockTransactionCountByNumber",
    params: ["finalized"]
  
  };

  const eth_balance = {

    jsonrpc: "2.0",
    id: 2,
    method: "eth_getBalance",
    params: ["", "latest"]


  }

  const result = await axios.post(ALCHEMY_URL, ([latest_block, eth_balance])
  ).then((response) => {
    console.log(response.data);
  })
  
}

console.log(transactionCount())

