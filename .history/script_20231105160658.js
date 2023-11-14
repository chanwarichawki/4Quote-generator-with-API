let apiQuotes = [];
//get quotes from API
async function getQuotes(){
  const apiUrl = "https://type.fit/api/quotes";
  try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    console.log(apiQuotes);
  } catch (error) {
    // catch error here
  }
}

//
