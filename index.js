import chalk from "chalk";

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🪲💡",
  "Why did the developer go broke? Because he used up all his cache! 💸",
  "Why did the programmer quit his job? Because he didn’t get arrays! 😂",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡🧑‍💻",
  "I told my computer I needed a break, and it said: 'You seem stressed — shall I close all tabs?' 🤖💻",
  "Why did the Java developer wear glasses? Because he didn’t see sharp! 🤓☕",
  "A SQL query walks into a bar, walks up to two tables, and asks: 'Can I join you?' 🍻📊",
  "I would tell you a UDP joke, but you might not get it. 📡😅",
  "Why did the front-end developer leave the restaurant? Because there were too many servers! 🍽️💻",
  "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did. 😅🔢",
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐞🌑",
  "There are only 10 types of people in the world: those who understand binary and those who don’t. 💾🤓",
  "Why do Java developers wear glasses? Because they can’t C#! 👓☕",
  "A SQL query walks into a bar, approaches two tables and asks: ‘Can I join you?’ 🍻🧮",
  "How do you comfort a JavaScript bug? You console it. 💬🐛",
  "Why was the developer broke? Because he used up all his cache! 💰🚫",
  "Debugging: Being the detective in a crime movie where you are also the murderer. 🕵️‍♂️💻",
  "Why did the developer go broke? Because he used async without await! 😭⏳",
  "What’s a programmer’s favorite hangout place? The Foo Bar! 🍸💬",
  "Why did the function stop calling each other? Because they had constant arguments! 🗣️🔁",
  "How do you generate a random string? Put a Windows user in front of a keyboard and ask for a password. ⌨️😂",
  "What’s the object-oriented way to become wealthy? Inheritance. 💼💰",
  "Why did the coder quit his job? Because he didn’t get arrays. 🧠❌",
  "Why do Python programmers prefer snake_case? Because they hate Java! 🐍☕",
  "Why do programmers hate nature? It has too many bugs. 🌳🐛",
  "Why did the JavaScript developer leave the restaurant? Because of the callback hell. 🔥🍽️",
  "What did the HTML say to the CSS? I like your style! 💅📄",
  "What did the API say to the frontend developer? Stop fetching me so often! 🔁📡",
  "Why was the computer cold? It left its Windows open. 🧊🪟",
  "Why don’t bachelors like Git? Because they are afraid to commit! 💍😂",
  "I told my computer I needed a break — now it won’t stop sending me KitKat ads. 🍫💻",
  "What’s a programmer’s favorite musical instrument? The keyboard! 🎹⌨️",
  "What did the developer say when their code finally worked? ‘It’s not a bug, it’s a feature!’ 🐞✨",
  "Why do JavaScript developers wear glasses? Because they don’t C sharp! 🤓🎯",
  "Why was the programmer late to work? He got stuck in a loop. 🔁⏰",
  "How do you know a programmer is an extrovert? They look at your shoes when talking instead of their own. 👟😆",
  "Why was the function always nervous? Because it had too many arguments! 😰📚",
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

function printJoke(joke) {
  console.log(chalk.greenBright.bold("\n🤣 Developer Dad Joke:\n"));
  console.log(chalk.cyanBright(joke));
  console.log(chalk.gray("\n~ Keep coding, keep laughing! 💻✨"));
}

export function showJokes(count = 1) {
  for (let i = 0; i < count; i++) {
    const joke = getRandomJoke();
    printJoke(joke);
  }
}

export function showHelp() {
  console.log(chalk.yellowBright.bold("\n💡 Dev Jokes CLI Help\n"));
  console.log(
    chalk.white(`
Usage:
  dev-jokes              Show one random developer joke
  dev-jokes --count <n>  Show n random jokes
  dev-jokes --help       Show this help message
  dev-jokes --version    Show current version
`)
  );
}
