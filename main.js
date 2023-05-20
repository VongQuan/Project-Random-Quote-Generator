/*const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector(".quote_btn");
const quoteAuthor = document.querySelector(".author .name");
const soundBtn = document.querySelector(".volume");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

//random Quote function
const randomQuote = () => {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = 'Loading quote....';
    //fetching randoms quotes/data from api and parsing it into js object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerHTML = result.content;
        quoteAuthor.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quotes";
        quoteBtn.classList.remove(".loading");
    });
}


quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
    //The speechSynthesisUtterance is the web api that requestes a speech request
    let sound = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${quoteAuthor.innerHTML}`);
    //Method speak transform text to sound;
    speechSynthesis.speak(sound);
});
copyBtn.addEventListener("click", () => {
    //copy the quote text on click 
    //method writeText() writes the text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerHTML);
});
twitterBtn.addEventListener("click", () => {
    let twitter = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(twitter, "_blank"); // opening a new twitter with passing quote in the URL
});*/

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector(".quote_btn");
const quoteAuthor = document.querySelector(".author .name");
const soundBtn = document.querySelector(".volume");
const copyBtn = document.querySelector(".copy");
const twitterdBtn = document.querySelector(".twitter");

//Random Quote Function
const randomQuote = () => {
    quoteBtn.innerHTML = "Loading Quotes ...";
    quoteBtn.classList.add("loading");
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quoteText.innerHTML = result.content;
        quoteAuthor.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quotes";
        quoteBtn.classList.remove(".loading");
    })
};

soundBtn.addEventListener("click", () => {
    //The speechSynthesisUtterance is the web api that requestes a speech request
    let sound = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${quoteAuthor.innerHTML}`);
    //Method speak transform text to sound;
    speechSynthesis.speak(sound);
});

copyBtn.addEventListener("click", () => {
    //Copy quote text to clipboard
    //method writeText() writes the text string to the system clipboard
    navigator.clipboard.writeText(`${quoteText.innerHTML}`);
});

twitterdBtn.addEventListener("click", () => {
    let twitter = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(twitter);
});

quoteBtn.addEventListener("click", randomQuote);

