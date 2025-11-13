# 😂 Dad Jokes CLI

A simple and fun command-line tool that delivers random dad jokes straight to your terminal --- because debugging is easier when you're laughing! 🤣

## 🚀 Features

- Get a random dad joke instantly

- Show multiple jokes with `--count`

- Display help or version info

- Lightweight, fast, and works offline

## 📦 Installation

Install globally using npm:

Bash

```
npm install -g dev-jokes

```

Replace `dev-jokes` with your actual npm package name if different.

## 🧠 Usage & Examples

Here are the available commands:

- **Show a random joke:**

  Bash

  ```
  dev-jokes

  ```

- **Show 5 random jokes:**

  Bash

  ```
  dev-jokes --count 5

  ```

- **Get help information:**

  Bash

  ```
  dev-jokes --help

  ```

- **Show current version:**

  Bash

  ```
  dev-jokes --version

  ```

## 💻 Example Output

A single joke:

> Why did the scarecrow win an award? Because he was outstanding in his field! 🌾

Multiple jokes (`--count 3`):

```
1️⃣ I told my wife she should embrace her mistakes... She gave me a hug.
2️⃣ Why don't skeletons fight each other? They don't have the guts.
3️⃣ I would tell you a construction joke, but I'm still working on it.

```

## 🧰 Local Development

To test or contribute locally:

Clone the repository

Bash

```
git clone https://github.com/your-username/dev-jokes.git

```

Navigate into the folder

Bash

```
cd dev-jokes

```

Install dependencies

Bash

```
npm install

```

Run locally

Bash

```
node index.js

```

## 🏗️ Project Structure

Plaintext

```
📦 dev-jokes
┣ 📂 bin
┃ ┗ 📜 dev-jokes.js
┣ 📜 index.js
┣ 📜 jokes.js
┣ 📜 package.json
┗ 📜 README.md
```
