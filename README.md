# Knock-Knock Jokes Generator

This project is a simple JavaScript program that generates random knock-knock jokes. The jokes are constructed from predefined collections of phrases and names, ensuring a variety of combinations for each joke.

## Table of Contents

- [Knock-Knock Jokes Generator](#knock-knock-jokes-generator)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Usage](#usage)
  - [Code Explanation](#code-explanation)
    - [Question Collection](#question-collection)
    - [Random Number Generator](#random-number-generator)
    - [First Letter Capitalization](#first-letter-capitalization)
    - [Knock-Knock Joke Generation](#knock-knock-joke-generation)
  - [Example Output](#example-output)
  - [Collaborators](#collaborators)

## Introduction

This is a JavaScript project that generates random knock-knock jokes using a set of predefined collections. The project is aimed at providing a fun way to understand basic JavaScript concepts such as arrays, functions, and loops.

## Features

- Generates random knock-knock jokes.
- Uses predefined collections of phrases and names.
- Capitalizes the first letter of each joke component.
- Ensures a variety of joke combinations.

## Usage

To use the knock-knock joke generator, simply run the JavaScript code in a browser console or a Node.js environment. The program will output a complete knock-knock joke to the console.

## Code Explanation

### Question Collection

The `collection` object contains arrays of strings that are used to construct the jokes:

```javascript
const collection = {
    knock: ["Knock, knock"],
    firstQuestion: ["Who's there ?"],
    knockNames: ["Annie", "Lettuce", "Boo", "Cow", "Tank", "Harry", "Atch", "Olive", "Orange", "Europe", "hein"],
    secondQuestion: ["Who?"],
    secondAnswer: ["you doing today?", "it take to get you to open the door?", "not, here I come!", "be a better punchline than this!", "SO YOU CAN HEAR ME!", "come out now?", "you know unless you open the door?"]
};
