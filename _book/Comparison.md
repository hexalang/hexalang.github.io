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
and `while () {}` with a `do {} while ()` ones. Also some special cases like `for (i in 5)`, `for (i in arr.length)` and `for (i in 0 ... arr.length)`. Maybe others in future, but nothing with complicated hard-to-read syntaxes (like `(in/of/each a:5..<b:7)`)
- You may use `,` comma to list multiple conditions instead of `&&`! `if (a, b == c, d > 5) {} else {}`
- Null-avoiding checks may be done with `if (let a = b)` syntax.
For example: `var i: Int? = null if (let int = i, int > 5) compute(int)` does check for `i != null`, sets it value to `int`, does 
all *condition checks* for `int` and calls `compute` with a guaranteed non-null value *if they a met*.
- `switch` does `break` automatically for each case. You don't place `break`s for `switch`es
- Modularity is very different (based on package-level namespaces), but on-demand compatible with JS

[More on porting from JavaScript](https://hexalang.github.io/book/FromJavaScript.html)

## TypeScript

- Hexa type system is stricter than TypeScript's: `Int` + `Float` vs just `number`. Types consider data-layout in memory. For example,
`Array<Float>` is not compatible with `Array<Int>` and vise-versa, because they are stored (even in JavaScript engines)
as different data types (basically, V8 transforms `[1,2,3]` to `Int32Array` until you add some `Float`s)
- Types always start with upper-case`TypeName`, functions, methods and vars with lowercase `varName`
- Basic types are `Bool`, `Int`, `Float`, `Void`, `String`, `Array<T>` or `[T]`, `Map<K, V>` or `[K:V]`, `Any` and some other
- Hexa has special advanced `enum` type family (yes, not only "list of constants", but complex enums, enum classes, computational fields, etc)
- Types inferred in more lazy manner, especially generics
- Some features not available in idiomatic Hexa code, but instead used only for external JavaScript bindings, like accessing
class instance as object with `[]`. Compiler will optimize, rearrange and rename those fields anyway. You will use `strictEq()` function which compiles to `===`, but no operator `===` available in normal code (this is done for sanity and to support more generation platforms) and others. `instanceof()` would be compiled to `instanceof` operator accordingly, but again, idiomatic Hexa has own `is` operator, which may be not suitable for external bindings depending on situation
- If you see, that some magic feature is not supported, it is done for performance reasons, both native and dynamic targets, and of course for code portability between them
- `if (x != null)` is not considered null-safe (`x` may be changed at any moment, what is safety here?), you have to use `if (let x = x)`
binding, like `if (let a = obj.a, let b = obj.b, a.x > b.x)` or `if (let o = obj, o.a.x > o.b.x)` if `obj` is nullable

List of JavaScript differences apply to TypeScript as well

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
