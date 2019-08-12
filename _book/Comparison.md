---
layout: book
title: Comparison with other languages
---

At first, there are common things that differentiate Hexa to most other programming languages:

- No semicolons `;` at all
- Language is strongly typed, types are [automatically inferred](https://en.wikipedia.org/wiki/Type_inference) (guessed) when possible
- Compiles very straitforwardly to JavaScript and machine code (LLVM and C) because of semantics of [lowest common denominator](https://en.wikipedia.org/wiki/Lowest_common_denominator_(computers)),
this ensures native interopability in both cases and very high performance
- Compiles [to any other programming language](https://en.wikipedia.org/wiki/Source-to-source_compiler), if corresponding code generation backend is provided and target language is not super
different to Hexa
- No garbage collection in native backends (LLVM and C), possibility of manual memory management - otherwise 
threadsafe [automatic reference counting](https://en.wikipedia.org/wiki/Automatic_Reference_Counting) is used
- Safety-first: null safety, checked exceptions, [iterators](https://en.wikipedia.org/wiki/Iterator), special syntax features


Compare with known language:


* Table of contents
{:toc}

## JavaScript

- `var` in Hexa is a `let` in JavaScript. Everyone uses `let` in js today anyway, but `var` as a keyword is more common and not breaks your old habits
- `let` compiles to `const`, accordingly, saving you some keystrokes
- Normal `function` functions are always compiled to `()=>` arrow-functions, thus they catch outer `this`
and should be defined before calling position
- Hexa has `()=>` syntax too
- Types are placed like this: `var a: Int = 1` and `function (v: Int): Int`
- Class fields have `var` and `let` before their names, also there is one and only visibility modifier `private`.
Methods prepended with `function`. Constructors are `new()`. Placing `this.` before field names isn't required. 
Braces `{}` aren't required for function bodies.

Full example:

```js
class A {
    var a = 123
    new (value) a = value
    private function return_a() {
        return this.a + 1 + a
    }
}

let a = new A(456)
```

- Maps are `[K:V]`, empty `new Map()` is `[:]` in Hexa: `var map: [String: Int] = [:]` then `map = ["JennysAge": 12, "BillsAge": 13]`
- Empty objects are `{:}`
- Strings are interpolated with `\()`. This works for all (`""` and `''`) strings except for raw ones surrounded with backtics.
Strings may be mutliple lines. `let age = 13 let billsAge = 'Bill\'s age is \(age)!'`
- No `===` and `!==` operators, use `strictEqual` and `strictNotEqual` functions
- Only `null`. Still, `undefined` is available as just an external variable (only in JavaScript backend)
- Arrays are typed and contain values of a single type: `let a: [Int] = [1, 2, 3] // Int's only`
- Not so many loops and iterators. Only `for (a in b)` which is same as `for (const a of b)` in JS,
and `while () {}` with a `do {} while ()` ones
- You may use `,` comma to list mutliple conditions instead of `&&`! `if (a, b == c, d > 5) {} else {}`
- Null-avoiding checks may be done with `if (let a = b)` syntax.
For example: `var i: Int? = null if (let int = i, int > 5) compute(int)` does check for `i != null`, sets it value to `int`, does 
all *condition checks* for `int` and calls `compute` with a guaranteed non-null value *if they a met*.
- `switch` does `break` automatically for each case. You don't place `break`s for `switch`es
- Modularity is very different (based on package-level namespaces), but on-demand compatible with JS

[More on porting from JavaScript](https://hexalang.github.io/book/FromJavaScript.html)

## C

- Object oriented programming with single inheritance, always-virtual methods, ARC and real interfaces
- No structures. Instead anonymous objects to be used. They are stored in memory as C-like structures, but with a pointer
to field accessor, very similiar to Go interfaces.
- Low-level features are implemented as on-demand code attributes. For example, you may declare C-like structures, even embedded into
other ones (without pointers or heap allocation) or unions, but it's not very idiomatic 
- Hexa has basic strongly-typed enums, tagged enums (algebraic data types), enums with fields (tagged classes), and nice pattern matching over them!
- String type is built-in. All string instances are kept in memory only once, thus they are very fast to use as keys for dictionaries
and reflection
- Namespaces are a thing
- `switch` does `break` automatically for each case. You don't place `break`s for `switch`es. [Saves you from some weird situations](https://www.phoronix.com/scan.php?page=news_item&px=Kernel-Wimplicit-fallthrough)
- Inline classes (abstract types) over any other type
- Unwrapping "possibly null" values done explicitly as `if (let a = b)` safe binding or via `value as! Int` unsafe cast (this is the only way to do this)
- Generics and compile time syntax tree transformation (instead of token-level `#define` macro)
