const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than its year. It takes Venus 243 Earth days to rotate on its axis but only 225 Earth days to orbit the Sun.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes.",
    "Bananas are berries, but strawberries aren't!",
    "The first oranges weren't orange - they were green!",
    "A group of flamingos is called a 'flamboyance'.",
    "Cows have best friends and get stressed when separated from them.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "The moon has moonquakes!"
];

let currentFact = "";

function getNewFact() {
    const factDisplay = document.getElementById('factDisplay');
    let newFact;
    do {
        newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === currentFact);
    
    currentFact = newFact;
    factDisplay.textContent = currentFact;
}

function shareFact(platform) {
    const fact = currentFact || "Check out this awesome Fun Facts app!";
    const encodedFact = encodeURIComponent(fact);
    
    if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodedFact}`);
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodedFact}&url=${window.location.href}`);
    }
}
