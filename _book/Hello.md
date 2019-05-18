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

```ts
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

If you don't want to setup Hexa right now, try compiler by not leaving a browser:

<https://hexalang.github.io/try/>

Some features are not supported in the online compiler (like file system access).

### Long story

Let's investigate our program step-by-step:

```ts
// My first program in Hexa!
```

Those gray notes are called *comments* and they don't affect program flow.
Feel free to note anything you find useful for yourself and other programmers.
You may comment out any code to disable it, so it won't be compiled:

```ts
// hello() this will do nothing
```

Or multiple lines altogether:

```ts
/*
  nothing
  here
  will be compiled
*/
```

There is also are documentational comments. They start with triple slash `///` and attached semantically to the next code block after them:

```ts
/// Show greetings
function hello() {
```

So we know what exactly that function does without reading whole code :thinking:. This is a really good and common practice to document your code, make it your habit.

Next we see a function and it's body:

```ts
function hello() { // "hello" is a function name
    // function body
}
```

Function is a reusable code block, you may run it as many times you wish, and even send different parameters (arguments) into it:

```ts
function hello(name) { // "name" is a function argument
    console.log("Hello, " + name) // "+" here joins text strings together
}

hello("World") // -> prints "Hello, World"
hello("people of the Earth") // -> prints "Hello, people of the Earth"
```

Some functions may be attached to modules and objects, you call them with a `.dot()` syntax, like `console` in this example:

```ts
console.log("Hello, Hexa!")
```

<!-- ## Troubleshooting -->

### Mastering error messages

Hexa is strictly typed and compiled, meaning it keeps track of code structure also at development time, not only at running resulting app. Thus it helps you to quickly find errors, way faster than, say, JavaScript. So let's go crazy and break some code!

Changle this line:

```ts
hello()
```

To this one:

```ts
hello(something)
```

When you will try to run it, you'll see a message like this, and program will not start:

```sh
[hello.hexa:8:7] #17 Can't find anything with name `something`
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

<!-- ## Level 2 - file system, useful stuff level 3, read repl from keyboard coz classic -->

<!-- ## Going next / Level Up - link to syntax examples article -->
