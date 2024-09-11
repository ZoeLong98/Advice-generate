# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./Screenshot%202024-09-11%20at%201.50.21 PM.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- axios

### What I learned

```js
const getNewAdvice = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    upDate(res.data); //把数据直接传入到函数中
  } catch (err) {
    console.log(err);
    throw err;
  }
};
```

### Continued development

JS,node,how to connect with backend server

## Author

- Frontend Mentor - [@Zoe](https://www.frontendmentor.io/profile/ZoeLong98)
