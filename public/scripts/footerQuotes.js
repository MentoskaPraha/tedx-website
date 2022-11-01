//when the window is loaded run the following
window.onload = async function(){
    //get elements from files
    const quotes = await fetch('/scripts/quotes.json').then((response) => response.json());
    const content = document.getElementById('footerQuoteContentField');
    const author = document.getElementById('footerQuoteAuthorField');

    //get a random quote
    let quote = Math.floor(Math.random()*quotes.list.length);
    quote = quotes.list[quote];

    //display that quote
    content.innerHTML = quote.content;
    author.innerHTML = quote.author;
}