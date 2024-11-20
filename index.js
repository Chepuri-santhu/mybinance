import express from "express";
import axios from "axios";
import path from "path";

const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

app.use(express.static("public"));

const PreviousPrices ={
    BTCUSDT:null,
    ETHUSDT:null,
    XRPUSDT:null
}

async  function fetchCryptoPrice() {
try{
    const response =await axios.get('https://api.binance.com/api/v3/ticker/price',{
        params:{
        symbols:'["BTCUSDT","ETHUSDT","XRPUSDT"]'
        }
    });
    const prices={};
    response.data.forEach(coin=>{
        prices[coin.symbol]=coin.price;
    });
    return prices;

}catch(error){
    console.log('error in fetcing prices',error);
    return {};
}

}
app.get("/",async(req,res)=>{
try{
    const prices=await fetchCryptoPrice();

    // const bitcoinprice = result.data.find(crypto => crypto.symbol==="BTCUSDT").price;
    // const ethereumprice = result.data.find(crypto => crypto.symbol==="BTCUSDT").price;
    // const Rippleprice = result.data.find(crypto => crypto.symbol==="BTCUSDT").price;

    res.render("index.ejs",{
        bitcoinprice:prices.BTCUSDT,
        ethereumprice:prices.ETHUSDT,
        Rippleprice:prices.XRPUSDT,
        BitcoinP:PreviousPrices.BTCUSDT,
        ethereumP:PreviousPrices.ETHUSDT,
        rippleP:PreviousPrices.XRPUSDT
}); 

PreviousPrices.BTCUSDT = prices.BTCUSDT;
PreviousPrices.ETHUSDT = prices.ETHUSDT;
PreviousPrices.XRPUSDT = prices.XRPUSDT;

}catch(error){
    console.log("error fetching in crypto prices",error);
    res.status(500).send("error in fetching data");
}

});

app.listen(port,()=>{
    console.log("local server is running on"+ port);
});
