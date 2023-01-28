const ethers = require("ethers");
const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/V9QniLcFpQjrpYVQITelw1cZY5Jspg60";

const addresses = ["0x07a812F11ff9857C7Db91bcD58b968AAaC0A86ED","0xeEde8AaCbF9BD025bf343255C5ebb1ca60fF6453"];

async function getTotalBalance() {
    const responses = await axios.post(ALCHEMY_URL, (addresses.map(addr => ({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBalance",
        params: [addr, "latest"],
      })))).then((response) => {
        const value = response.data
        console.log(value)
        function add(){
            let total_balance = 0
            for (let i = 0; i < value.length; i++) {
                total_balance += parseInt(value[i].result, 16)   
            }
            return ("You have " + total_balance + " wei in your wallet!")
        }
        return add()

        
      });
      console.log(responses)

}
console.log(getTotalBalance())
module.exports = getTotalBalance

