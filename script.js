const messages = [
    "Are you sureee, Princess?",
    "Think carefully, Babyyy 👀",
    "Your Batman is getting nervous...",
    "My Swara wouldn’t do this… right?",
    "Okay but like…<br>imagine us on 14th together 🥺",
    "You know that I’m asking ONLY you<br>and no other girl right?",
    "Soft no? Or real no? 🤨<br>Don't say no I'd be pretty sad",
    "Okay, I won’t ask anymore...<br>Haha, just kidding! Please say yes 🥺",
    "Swara maan jao na...",
    "Pupu, Batman is sad now :(",
    "My dearest 29th August girl wouldn't do this to me 😤",
    "Do you have a crush on me 😭👉🏻👈🏻",
    "Acha this is the last message pakka-<br>ab you can actually click yes.",
    "Kya mtlb no?",
    "Are sacchi! This is the last! Say yes!",
    "HAWWWW MUJH P SHAQ KAR RHI HO TUM >~<<br>I'm telling you there's no more messages!",
    "Meri baat hi nhi maanti ye ladkiiii -. -",
    "Kya mtlb maanti hu?",
    "Kya mtlb maanti hu? (2.0)",
    "kya mtlb how do you know what I'm thinking?",
    "Kya mtlb stop making me blush?",
    "Okay, I lied. This is the last one, I promise!<br>Please say yes 🥺<br>Will You Be my Valentine my love?"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}