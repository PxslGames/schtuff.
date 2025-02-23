// Array of taglines
const taglines = [
    "uhh idk, i just made this",
    "lol i guess you're here now?",
    "umm, this is a website. cool?",
    "so like, welcome to the thing i made",
    "just hit refresh if you're bored",
    "this website makes zero sense, enjoy",
    "honestly no idea what's happening here",
    "i tried, but i have no clue what i'm doing",
    "this is what happens when you mess around with code",
    "i just put some random stuff together, have fun",
    "click on stuff, maybe it does something?",
    "no idea why this exists, but here it is",
    "this is just... stuff. enjoy.",
    "i'm just learning, don't judge me",
    "you clicked it, now what? idk",
    "this is probably broken, but who cares",
    "don't ask questions, just scroll",
    "what even is this site? I don't know",
    "no purpose, just vibes",
    "do people even use this? lol",
    "i’m too tired to explain this",
    "this website is just as confused as you are",
    "refresh it, maybe something will change?",
    "don’t think too much about it, just click around",
    "this is where randomness happens",
    "dont ask how i coded this, i just did"
];

// Function to pick a random tagline from the array
function getRandomTagline() {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    return taglines[randomIndex];
}

// Set the random tagline when the page loads
document.getElementById("tagline").textContent = getRandomTagline();