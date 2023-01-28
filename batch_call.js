const axios = require('axios');
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/V9QniLcFpQjrpYVQITelw1cZY5Jspg60";

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
    params: ["0x07a812F11ff9857C7Db91bcD58b968AAaC0A86ED", "latest"]


  }

  const result = await axios.post(ALCHEMY_URL, ([latest_block, eth_balance])
  ).then((response) => {
    console.log(response.data);
  })
  
}

console.log(transactionCount())

