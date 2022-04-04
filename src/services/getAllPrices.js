import axios from "axios"

export const getAllPrices  =()=>{
    return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then(res=>{
        const {data} = res
        return data
    })
}