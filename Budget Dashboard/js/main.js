const btc = document.getElementById('Bitcoin')
const eth = document.getElementById('ethereum')
const doge = document.getElementById('dogecoin')

const settings = {
    'async': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2Cethereum%2Cdogecoin&vs_currencies=Usd',
    'method': 'GET',
    'headers': {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
})