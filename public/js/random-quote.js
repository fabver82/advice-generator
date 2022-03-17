let button = document.getElementById('button');
let quoteField = document.querySelector('.quote');
let quoteIdField = document.querySelector('.quote-id');

const randomQuote = async function(){
    try{
        let reponse =  await fetch('https://api.adviceslip.com/advice');
        let quote = await reponse.json();
        return quote;
    }
    catch(err){
        console.error(err);
    }
    
}

button.addEventListener('click',async ()=>{

    await randomQuote().then((quote)=>{
        // console.log(quote);
        quoteIdField.textContent = `ADVICE #${quote.slip.id}`;
        quoteField.textContent = `"${quote.slip.advice}"`;
    })
})