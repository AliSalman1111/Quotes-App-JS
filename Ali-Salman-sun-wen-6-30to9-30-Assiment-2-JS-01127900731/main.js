
const quotes = [
  "“Be yourself; everyone else is already taken.” –<br> <br> Oscar Wilde",

  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> <br>   – Albert Einstein",

  "“So many books, so little time.” – <br> <br> Frank Zappa",

  "“A room without books is like a body without a soul.” –<br> <br>  Marcus Tullius Cicero",

  "“You only live once, but if you do it right, once is enough.” –<br> <br>  Mae West",

  "“In three words I can sum up everything I've learned about life: it goes on.” –<br> <br>  Robert Frost"

];


var quoteBox = document.getElementById('quote-box');



function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.innerHTML = quotes[randomIndex];
}

var newQuote = document.getElementById('new-quote').addEventListener('click', showRandomQuote);


