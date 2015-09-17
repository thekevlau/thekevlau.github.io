console.log("Hey there! Welcome to my website. Hope you're having a great day!");


var witty_quotes = [
    // Tyrion
    "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
    "A mind needs books like a sword needs a whetstone.",

    // Tywin
    "You're blessed with skills, knowledge and talent that few men possess. And you're still blessed with youth. What have you done with these blessings?",
    "Do you know what 'legacy' means? It's what you pass down to your children, and your children's children. It's what remains of you when you're gone.",
    "Aegon Targaryen changed the rules, that's why every child alive still knows his name. -- Aegon, and his sisters.",

    // Jaqen
    "Valar Dohaeris.",

    // Laghima
    "Instinct is lie, told by a fearful body, hoping to be wrong.",

    // Zaheer
    "Let go your earthly tether. Enter the void. Empty, and become wind.",

    // Iroh
    "Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
    "It is important to draw wisdom from different places. If you take it from only one place it will become rigid and stale.",
    "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
    "Who knocks at the garden gate?",

    // Pian Dao
    "Creativity, versatility, intelligence. These are the traits that define a great (swords)man.",

    // Roku
    "It was bitter work, but the results...were worth it.",

    // Jeong Jeong
    "Learn restraint or risk destroying yourself and everything you love.",

    // Irene Adler
    //"Brainy’s the new sexy.",

    // Sherlock
    "I’m not a psychopath, Anderson. I’m a high-functioning sociopath. Do your research.",

    // Harvey x Mike
    "I'm inclined to give you a shot (at this job opening), but what if I decide to go another way? --I'd say that's fair. Sometimes I like to hang out with people who aren't that bright, you know, just to see how the other half lives.",

    // Edward Elric
    "A lesson without pain is meaningless- you cannot gain anything without sacrificing something else in return. Although, if you can endure that pain and walk away from it, you'll find you have a heart strong enough to overcome any obstacle- a heart made full metal.",

    // Other Sayings, Thoughts and Interesting Ideas
    //"What you did yesterday doesn't matter. What counts is what you do today.",
    "男儿当自强",
    "此时不搏 更待何时",

    // SC 2
    "You must construct additional pylons.",

    // Hearthstone
    "The light shall bring victory!",
    "For doomhammer!",

    // Julie Zhuo
    "Self awareness and proactivity.",

];

var maximum = witty_quotes.length-1;
var minimum = 0;
var rand_num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var witty_quote = witty_quotes[rand_num];

document.getElementById("wittyQuote").innerHTML = witty_quote;
