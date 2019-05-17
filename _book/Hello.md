---
layout: book
title: Hello, Hexa!
---

Let's write your very first program in Hexa!

If you're already familiar with programming,
take a look at a [programming language comparison list](https://hexalang.github.io/book/Comparison.html).

## Quickstart

Download [Hexa compiler](https://github.com/hexalang/hexa#stable) and [syntax highlighting for your code editor](https://github.com/hexalang/hexa#tools--ide). 
Create new file `hello.hexa` and place anywhere you wish.

Add some pretty lines into:

```js
// My first program in Hexa!

/// Show greetings
function helloMessage() {
    console.log("Hello, Hexa!")
}

helloMessage()
```

> Note: Hexa uses tabs for indentation
>> This is *not* enforced :relaxed:

Your file may be evaluated directly without compilation:

```sh
hexa hello.hexa
```

Expected output:

```
Hello, Hexa!
```

## Long story

Let's investigate our program step-by-step:

- Line-by-line
- This is a good practice to document your code
