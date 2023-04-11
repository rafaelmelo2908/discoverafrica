export default function initFetchBitcoin(){

    fetch('https://blockchain.info/ticker')
.then(Response => Response.json())
.then(bitcoin => {
    const btcPrice = document.querySelector('.btc-price');
    btcPrice.innerText = (100/ bitcoin.GBP.sell).toFixed(4);
    console.log(json.GBP.sell);
})


}

initFetchBitcoin();


//https://blockchain.info/ticker