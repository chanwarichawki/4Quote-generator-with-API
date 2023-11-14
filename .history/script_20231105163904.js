let apiQuotes = [];
// show new quote
function newQuote() {
// pick random quote from api
}
//get quotes from API
async function getQuotes(){
  const apiUrl = "https://type.fit/api/quotes";
  try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    console.log(apiQuotes[12]);
  } catch (error) {
    // catch error here
  }
}

//on load
getQuotes();

//math
Math.floor;
Math.ceil;
Math.round;
