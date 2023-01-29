const axios = require('axios');
const ALCHEMY_URL = "";

const addresses = [];

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
            return ("You have " + (total_balance/(10**18)) + " ETH in your wallet!")
        }
        return add()

        
      });
      console.log(responses)

}

console.log(getTotalBalance())
module.exports = getTotalBalance

