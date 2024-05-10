---
title: "Make your own Gemini powered Discord Chat Bot"
description: "This CodeLab demonstrates how to make a Discord bot that used Gemini AI to reply to your messages."
slug: "integrating-gemini-with-discord-as-bot"
authors:
  [
    {
      name: "Nishant Singh",
      image: "/authors/nishant.jpeg",
      socials:
        {
          linkedin: "https://www.linkedin.com/in/nishaantkrsingh/",
          github: "https://github.com/nishaantkrsingh",
          web: "https://nishants.me",
        }
    },
  ]
date: 2024-04-08
categories: "Technology"
duration: 30
image: "/codelabs/getting-started-with-gradus/hero.png"
tags: ["discord", "javascript"]
draft: false
---

# Introduction
Here we will learn how to make our own discord chat bot using Gemini AI. Making a discord bot is very simple thanks to Discord's API support and availability of documentation.
The language used will be `Java Script` with [discord.js](https://discord.js.org/) module and [@google/generative-ai](https://aistudio.google.com/). 

## Prerequisits
1. [Discord Account](https://discord.gg) with admin access to any server.
2. [Gemini API key](https://aistudio.google.com/)

## Project Setup
For project set-up make a new file and npm init in command-line instruction to creates a package.json file for Node.js packages and to initializes a project.
```bash
npm init -y
```
The node.js project is set-up and we can start installing packages required to make our Discord bot.

# Obtaining API keys


API keys will be required to communicate with the servers of Discord and Gemini.
## Discord
 Get API keys of Discord from [Discord Developer Portal](https://discord.com/developers/applications), make sure you have `MESSAGE CONTENT INTENT` enabled and have all the required permissions enabled. (If bot is to be used in personal servers etc. then you can just set permisions as Administrator to escape the hastle.)
 Invite your bot to a Discord Server and save the `secret key` to `.env` file in your project directory.

## Gemini
  Generate API key of Gemini from [AI Studio](https://aistudio.google.com/). Save the API key in `.env` file in your project directory.


## At end your `.env` file should look like this:
    ```[.env]
    DISCORD_TOKEN = "YOUR_DISCORD_TOKEN"
    GEMINI_API = "YOUR_GEMINI_API_KEY"
```

# Project Setup

1.Start by installing required modules:
```bash
npm install discord.js
```

```bash
npm install @google/generative-ai
```
```bash
npm install dotenv
```


2. Add a `.gitignore` file and add `.env` and `node_modules` to it.
```[.gitignore]
.env
node_modules
```
3. Make an `index.js` file and add `start script` to `package.json`. At end it should look similar to this:
```json [package.json]
{
  "name": "discordgeminibot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@google/generative-ai": "^0.3.1",
    "discord.js": "^14.14.1",
    "dotenv": "^16.4.5"
  }
}
```
:::md-alert
#content
Version numbers may differ but funcncnality will be same.
:::

After this your directory structure should look similar to this:

```text
└── 📁discordgeminibot
    ├── 📁node_modules
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    ├── package.json

```
# Code

1. We will start by importing required packages and configuring environment variable.

```js [index.js]
const { Client, GatewayIntentBits, SlashCommandBuilder} = require("discord.js")
const { GoogleGenerativeAI } = require("@google/generative-ai")
const dotenv = require('dotenv');
dotenv.config();
```
2. Assigning `intents` for Discord bot.
```js [index.js]
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds, // Guild is to create an event
        GatewayIntentBits.GuildMessages, //GuildMessages to know when a message is sent
        GatewayIntentBits.MessageContent //MessageContent to get the contents of the message when the message is sent
    ]
})
```
3. In this step we will get the message from the client whenever the bot is tagged and split the sentence to remove the `@` tag word. The word is further passed to a `joiner()` function that joins the array to make a sentence again which is further passed to the `gemini()` function which send the message to gemini and get's the answer which is further sent to Discord.

```js
client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    else if(message.mentions.has(client.user)){
        let msg = message.content
        const arr = msg.split(" ")
        arr.shift()
        ques = joiner(arr);
        (async () => {
            const result = await gemini(ques);
            // console.log(result);
            message.reply({
                content: result,
            })
        })();
        // message.reply({
        //     content: ques,
        //  });    
    }
    
});
```
4. The `joiner()` function that helps to join words:
```js
const joiner = (words) => {
    let sentence = ""
    for(let i =0; i<words.length; i++){
        sentence += words[i]
        if (i < words.length -1){
            sentence += " "
        }
    }
    return sentence
}
```
5. The `gemini()` function that takes the message and returns the output given by the Gemini AI.
```js
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const  gemini = async(ques) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = ques + "? reply to the question in as less words as possible like 100 words or less"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    // console.log(text);
    return text;
}
```
6. Loggin in to Discord as bot
```js
client.login(process.env.DISCORD_TOKEN)
```
7. Now just run it with: 
```bash
npm start
```
Your Discord bot should be up and running and you can interact with your bot by mentioning the bot and putting your message after it, the bot will reply by mentioning you.

# Full Code
```js
const { Client, GatewayIntentBits, SlashCommandBuilder} = require("discord.js")
const { GoogleGenerativeAI } = require("@google/generative-ai")
const dotenv = require('dotenv');
dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);


const client = new Client({
    intents:[
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent     
        ]
})

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    else if(message.mentions.has(client.user)){
        let msg = message.content
        const arr = msg.split(" ")
        arr.shift()
        ques = joiner(arr);
        (async () => {
            const result = await gemini(ques);
            message.reply({
                content: result,
            })
        })();
    }
    
});

const joiner = (words) => {
    let sentence = ""
    for(let i =0; i<words.length; i++){
        sentence += words[i]
        if (i < words.length -1){
            sentence += " "
        }
    }
    return sentence
}


const  gemini = async(ques) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = ques + "? reply to the question in as less words as possible like 100 words or less"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}


client.login(process.env.TOKEN)
