console.log('This would be the main JS file.');


var witty_quotes = [
    // Tyrion
    "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
    "A mind needs books like a sword needs a whetstone.”",

    // Jacken
    "Valar Morghulis.",

    // Iroh
    "Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
    "It is important to draw wisdom from different places. If you take it from only one place it become rigid and stale.",
    "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",

    // Pian Dao
    "Creativity, versatility, intelligence. These are the traits that define a great swordsman. And these are the traits that define you.",

    // Roku
    "It was bitter work, but the results were worth it.",
    "You must be decisive.",

    // Jeong Jeong
    "Learn restraint or risk destroying yourself and everything you love.",

    // Tywin
    "You're blessed with abilities that few men possess. You're blessed to belong to the most powerful family in the kingdoms. And you're still blessed with youth. And what have you done with these blessings?",
    "You know what 'legacy' means? It's what you pass down to your children, and your children's children. It's what remains of you when you're gone.",
    "You're too smart for your own good. Has anyone told you that?",

    // Francis Underwood
    "*tap* *tap*"
];

var maximum = witty_quotes.length-1;
var minimum = 0;
var rand_num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var witty_quote = witty_quotes[rand_num];

document.getElementById("wittyQuote").innerHTML = witty_quote;