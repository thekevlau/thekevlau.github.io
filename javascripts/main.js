console.log("Hey there! Welcome to my website. Hope you're having a great day!");


var witty_quotes = [
    // Tyrion Lannister, Game of Thrones
    "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
    "A mind needs books like a sword needs a whetstone.",

    // Tywin Lannister, Game of Thrones
    "You're blessed with skills, knowledge, and talent that few men possess. And you're still blessed with youth. What have you done with these blessings?",
    "Do you know what 'legacy' means? It's what you pass down to your children, and your children's children. It's what remains of you when you're gone.",
    "Aegon Targaryen changed the rules, that's why every child alive still knows his name. -- Aegon, and his sisters.",

    // Jaqen, Game of Thrones
    "Valar Dohaeris.",

    // Laghima, The Legend of Korra
    "Instinct is lie, told by a fearful body, hoping to be wrong.",

    // Zaheer, The Legend of Korra
    "Let go your earthly tether. Enter the void. Empty, and become wind.",

    // Iroh, Avatar the Last Airbender
    "Sometimes life is like this dark tunnel- you can’t always see the light at the end of the tunnel. But if you just keep moving, you will come to a better place.",
    "It is important to draw wisdom from different places. If you take it from only one place it will become rigid and stale.",
    "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
    "Who knocks at the garden gate?",
    "The best tea tastes delicious whether it comes in a porcelain pot or a tin cup.",

    // Pian Dao, Avatar the Last Airbender
    "Creativity, versatility, intelligence. These are the traits that define a great (swords)man.",

    // Avatar Roku, Avatar the Last Airbender
    "It was bitter work, but the results...were worth it.",

    // Jeong Jeong, Avatar the Last Airbender
    "Learn restraint or risk destroying yourself and everything you love.",

    // Irene Adler, Sherlock
    //"Brainy’s the new sexy.",

    // Sherlock Holmes, Sherlock
    "I’m not a psychopath, Anderson. I’m a high-functioning sociopath. Do your research.",

    // Harvey Specter & Mike Ross, Suits
    "I'm inclined to give you a shot (at this job opening), but what if I decide to go another way? --I'd say that's fair. Sometimes I like to hang out with people who aren't that bright, you know, just to see how the other half lives.",

    // Edward Elric, Full Metal Alchemist Brotherhood
    "A lesson without pain is meaningless- you cannot gain anything without sacrificing something else in return. Although, if you can endure that pain and walk away from it, you'll find you have a heart strong enough to overcome any obstacle- a heart made of full metal.",

    // Other Sayings, Thoughts and Interesting Ideas
    //"What you did yesterday doesn't matter. What counts is what you do today.",
    "男儿当自强",
    "此时不搏 更待何时",

    // StarCraft 2, Protoss
    "You must construct additional pylons.",

    // Hearthstone, Taunts
    "The light shall bring victory!",
    "For doomhammer!",

    // Julie Zhuo, Medium Blog Post
    "Self awareness and proactivity. To know your strengths and weaknesses and to have the will to do something about it.",

    // UA Slogan, My Hero Academia
    "A true hero is someone who overcomes life's misfortunes to go beyond. Plus Ultra!",

    // Zoro, One Piece
    "There's no point in rushing. As we are, we won't stand a chance. We'll stop here and get stronger...and then set sail for the Grand Line once more!"

];
var maximum = witty_quotes.length - 1;
var minimum = 0;
var rand_num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var witty_quote = witty_quotes[rand_num];

document.getElementById("wittyQuote").innerHTML = "\"" + witty_quote + "\"";
