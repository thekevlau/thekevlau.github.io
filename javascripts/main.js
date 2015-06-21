console.log('This would be the main JS file.');


var witty_quotes = [
    // Tyrion
    "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
    "A mind needs books like a sword needs a whetstone.",

    // Tywin
    "You're blessed with skills, knowledge and talent that few men possess. And you're still blessed with youth. What have you done with these blessings?",
    "Do you know what 'legacy' means? It's what you pass down to your children, and your children's children. It's what remains of you when you're gone.",
    "You're too smart for your own good. Has anyone told you that?",
    "Aegon Targaryen changed the rules, that's why every child alive still knows his name. -- Aegon, and his sisters.",

    // Jaqen
    "Valar Morghulis.",

    // Laghima
    "Instinct is lie, told by a fearful body, hoping to be wrong.",

    // Zaheer
    "Let go your earthly tether. Enter the void. Empty, and become wind.",

    // Iroh
    "Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
    "It is important to draw wisdom from different places. If you take it from only one place it become rigid and stale.",
    "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",

    // Pian Dao
    "Creativity, versatility, intelligence. These are the traits that define a great swordsman.",

    // Roku
    "It was bitter work, but the results were worth it.",

    // Jeong Jeong
    "Learn restraint or risk destroying yourself and everything you love.",

    // Irene Adler
    "Brainy’s the new sexy.",

    // Sherlock
    "I’m not a psychopath, Anderson. I’m a high-functioning sociopath. Do your research.",

    // Francis Underwood
    "*tap* *tap*",

    // Ed
    "A lesson without pain is meaningless- you cannot gain anything without sacrificing something else in return. Although, if you can endure that pain and walk away from it, you'll find you have a heart strong enough to overcome any obstacle.. a heart made full metal."

    // Other Sayings, Thoughts and Interesting Ideas
    "What you did yesterday doesn't matter. What counts is what you do today.",
    "男儿当自强",
    "此时不搏 更待何时",

    // Julie Zhuo
    "Self awareness and proactivity.",

];

var maximum = witty_quotes.length-1;
var minimum = 0;
var rand_num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var witty_quote = witty_quotes[rand_num];

document.getElementById("wittyQuote").innerHTML = witty_quote;