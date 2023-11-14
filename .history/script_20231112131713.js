const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const author = document.getElementById('author')
const twitter = document.getElementById('twitter')
const newQuote = document.getElementById('new-quote')




//let apiQuotes = [];
//let apiQuotes = [];
// show new quote
function newQuote() {
// pick random quote from apiQuotes array
//const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
const quote = newQuote[Math.floor(Math.random() * newQuote.length)];
// check if auther fild is blank and replace it
if (!quote.author) {
  authorText.textContent = "unknown" ;
}else{
  authorText.textContent = quote.author ;
}
//check quote length to determine styling 
if(quote.Tex)
quoteText.textContent = quote.text;
}
/*const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
console.log(quote);
}*/

//get quotes from API

async function getQuotes(){
  const apiUrl = "https://type.fit/api/quotes";
  try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json() */
  //  console.log(apiQuotes[12]); 
  newQuote();
  
  } catch (error) {
    // catch error here
  }
}

//on load
//getQuotes();

//math
//Math.floor;
//Math.ceil;
//Math.round 




