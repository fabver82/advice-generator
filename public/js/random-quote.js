let button = document.getElementById('button');
let quoteField = document.getElementById('quote');
let quoteIdField = document.getElementById('quote-id');

const randomQuote = async ()=>{
    try{
        let reponse =  await fetch('https://api.adviceslip.com/advice',{
            //prevent cache issues;
            cache: 'no-cache'
        })
        let quote = await reponse.json();
        quoteIdField.innerText = `ADVICE #${quote.slip.id}`;
        quoteField.innerText = `"${quote.slip.advice}"`;
    }
    catch(err){
        console.error(err);
    }
    
}
randomQuote();
button.addEventListener('click',async ()=>{

    await randomQuote();
})