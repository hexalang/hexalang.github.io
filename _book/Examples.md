---
layout: book
title: Syntax examples (draft)
---

{:toc}

### Hello, World!

```js
console.log("Hello, World!")
```

### Comments

Comments are JavaScript-style. Multi-line comments are nestable.

```swift
// Single-line comment.

/*
  Multi-line
  comment.
*/

/*
  Nested

  /* multi-line */

  comment.
*/
```

Common variable types
---

```swift
null // No value
42 // 32-bit signed integer
123.456 // 64-bit floating-point number
true false // Boolean type
"string" // String or text type
["red", "green", "blue"] // Array type or list

```

Variables in Hexa are statically typed:

```swift
var a: Int = 123
let b: Bool = true
```

Types a [inferrable]:

```swift
var a = 123
let b = true
```

## Deeper overview

### Literals

```swift
0x10 // Hexadecimal
`C:\Windows\System32\` // Raw strings do *not* do pre-escaping, but generate to JavaScript with escapes
```

### Lists

```swift
[] // Empty structure
[1, 2, 3]
[true, false, true, true] // Elements of same type
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1] // No trailing comma
]
```

Maps
---

```swift
[:] // Empty map
[ "hello": "world!" ]
[ 1: "one", 2: "two" ] // Elements of same type
```

Structures
---

```swift
{:} // Empty structure
{ hello: "world!" }
{ name: "Jane", age: 21 }
```

Strings
---

```swift
"Strings are
  multi
    line"
"\'Second\nline\'" // Character escapes
```

## Advanced features

.

## Not yet implemented features

.
