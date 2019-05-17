---
layout: book
title: Strings and text
---

Text block, or word, or sentence, or character, in Hexa are all called a "string".
String is an independent piece of human-readable something in computer memory. Strings do not contain any special meaning (compared to objects),
and represented as type `String`. <!-- TODO link to class documentation -->

* Table of contents
{:toc}

### Syntax of strings

```ts
let s: String = "hello"
let s = "hello"
// Compiler knows what qoutes mean 
// and sets 's' type to 'String' for you
```

Double- and single quoted strings have absolutely same meaning and features

```ts
"hello"
'hello' // No difference, nothing to worry about
```

Strings support two basic operations: taking character at position and joining strings together.
And they have only one property — length, or size.

```ts
let s = "hello" + "!" // Same as "hello!"
let s = "hello" + '!' // Mixing double- and single quoted strings is fine

// TODO []> It is better to use .charCodeAt

s.length // -> 6 characters, h-e-l-l-o-!
"hello!".length // -> 6
("hello" + "!").length // -> 6
```

You cannot change characters of already created string, but you may change a string variable:

```ts
var s = "world" // Note using 'var' instead of 'let'
s = s + " " // 's' now contains 'world '
s = "hello " + s // Adds in front, 's' now contains 'hello world '
s += "!" // Same as s = s + "!"
console.log(a) // -> prints 'hello world !'
```

### Superpowers

Strings have special superpower: adding anything to string converts it to string (...sometimes into nonsensical stuff 😅)

```ts
"value: " + 3 // -> becomes "value: 3"
"value: " + [1, 2, 3] // -> becomes "value: 1,2,3"
"value: " + true // -> becomes "value: true"
```

Special characters used as `\n` allowing you to add invisible space. Currently supported characters are:

- `\\` — adds `\` character itself
- `\t` — adds a tab
- `\n` — new line
- `\r` — most useless superpower

When multi line strings are used directly in code, without resorting to special characters to encode new lines,
on different platforms you will have incomplatible newlines encoding, `\r\n` on Windows, `\n` on Linux and most others.

```ts
let multiline = "what is in between
of those lines?"
```

Hexa takes care for you, by always replacing `\r\n` to `\n`, saving your team mates from unneccessary headache and holywars:

```ts
let multiline = "what is in between\nof those lines?"
//                                 ^^ note \n in the middle
```

### String interpolation

Sometimes you may want to embed value into string or do basic formatting. To do this just mention variable name within `\()`:

```ts
let welcome = 'world'
console.log('hello \(welcome)!') // -> prints 'hello world!'

// Basically the same as:
console.log('hello ' + welcome + '!') // -> prints 'hello world!'
```

You may use any expressions within interpolation parethesis:

```ts
let a = [1,2,3]
console.log('ten is \(5 + 5) while [\(a)] length is \(a.length)')
// -> prints 'ten is 10 while [1, 2, 3] length is 3'
```

### Raw strings

Raw texts are surrounded by **&#96;backticks&#96;**. They don't care about special characters.

```ts
console.log("hello\tworld") // -> prints 'hello    world'
console.log('hello\tworld') // -> prints 'hello    world'
console.log(`hello\tworld`) // -> prints 'hello\tworld'
```

Raw strings **do not** support interpolation:

```ts
let welcome = 'world'
console.log(`hello \(welcome)!`) // -> prints 'hello \(welcome)!'
```

They also keep line endings information as is:

```ts
let s = `
` // Contains \n or \r\n depending on your code editor settings
```

Only special case is embedding a backtick characted into raw string, possible by repeating backtick twise:

```ts
let s = `this is ``backticked`` string`
// Same as "this is `backticked` string"
// Note single backticks in a resulting string
```

### Optimization

Strings are quite fast, they never change, so they never overhead. But they have a fault: string creation is a costly operation.
New strings are created on concatentaion of existing ones, and conversion of objects to text (like printing formatted number to screen).

Compiler tries it's best to optimize such cases.
In every obvious situation it builds a complete string: `"a" + "b"` is guaranteed to become `"ab"`. This optimization is always enabled.

But sometimes you have to generate really big strings of many small ones.
Instead of adding them with "+", try putting them into array and join later:

```ts
// Instead of:
let result = a + b + c + ...

// Do:
let temp = []
temp.push(a)
temp.push(b)
temp.push(c)
...
let result = temp.join()
```

While this may seem imperfect (from a very nervous systems programmer perspective who optimizes into eternity), 
speed of array operations is so good, most of the time you will not notice performance drops.
