---
layout: book
title: Hello, Hexa!
---

Let's write your very first program in Hexa!

If you're already familiar with programming,
take a look at a [programming language comparison list](https://hexalang.github.io/book/Comparison.html).

* Jekyll is weird
{:toc}

## Quickstart

Download [Hexa compiler](https://github.com/hexalang/hexa#stable) and [syntax highlighting for your code editor](https://github.com/hexalang/hexa#tools--ide). 
Create new file `hello.hexa` and place anywhere you wish.

Drag it into code editor then add some pretty lines into:

```js
// My first program in Hexa!

/// Show greetings
function hello() {
    console.log("Hello, Hexa!")
}

hello()
```

> Note: Hexa uses tabs for indentation
>> This is *not* enforced :relaxed:

Your file may be evaluated directly without compilation:

```sh
hexa hello.hexa
# This is called "console command"
# if you're familiar with terminal
```

Same within code editor:

- Sublime Text — ...

Expected output:

```
Hello, Hexa!
```

### Running code online



### Long story

Let's investigate our program step-by-step:



Those gray notes are called *comments* and they don't affect program flow.
Feel free to note anything you find useful for yourself and other programmers.
You may comment out any code to disable it, so it won't be compiled:


Or multiple lines altogether:


This is a good practice to document your code


<!-- ## Troubleshooting -->

### Mastering error messages

Hexa is strictly typed and compiled, meaning it keep track of code structure also at development time, not only at running resulting app. Thus it helps you to quickly find errors, way faster than, say, JavaScript. So let's go crazy and break some code!

Changle this line:

```ts
hello()
```

To this one:

```ts
hello(something)
```

When you will try to run it, you'll see something like this, and program will not start:

```ts

```

All error messages have common structure:

```ts
[filename.hexa:line:column] #errorCode description
```

It is really hard to get lost.
Error `#` codes help you to discuss errors with team mates who have different error messages translation than yours.

Line numbers start from 1, so do columns:

```ts
/*1*/ // My first program in Hexa!
/*2*/ 
/*3*/ /// Show greetings
/*4*/ function hello() {
/*5*/     console.log("Hello, Hexa!")
/*6*/ }
/*7*/ 
/*8*/ hello(something)
            ^ [hello.hexa:8:7]
      123456789
```
