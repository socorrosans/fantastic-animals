export default function initFetchBitcoin(){
  const btcPrice = document.querySelector('.price-btc')

  fetch("https://blockchain.info/ticker")
  .then(r => r.json())
    .then(json => {
      btcPrice.innerText = (100 / json.BRL.sell).toFixed(4)
    }).catch(err => console.log(err))
}
