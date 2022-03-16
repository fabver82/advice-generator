let button = document.getElementById('button');
let quoteField = document.querySelector('.quote');
let quoteIdField = document.querySelector('.quote-id');
console.log(quoteField);

const randomQuote = async function(){
    return await fetch('https://api.adviceslip.com/advice')
    .then(quote=>quote.json());
}

button.addEventListener('click',async ()=>{

    await randomQuote().then((quote)=>{
        console.log(quoteIdField);
        quoteIdField.textContent = `ADVICE #${quote.slip.id}`;
        quoteField.textContent = quote.slip.advice;
    })
})