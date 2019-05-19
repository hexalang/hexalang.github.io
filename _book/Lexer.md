---
layout: book
title: Inside compiler&#58; Lexer
into: compiler
---

<!-- TODO (from docs to here only) -->

Lexer transfers data then to [Parser].

Example of lexer work:

```ts
"function hello() return 123" => ["function", "hello", "(", ")", "return", "123"]
// In actual compiler code tokens are used, not arrays of plain strings
```

Each little piece of code is encoded as [Token] object, which contains position in file, extended value (for strings and identifiers), etc.
This is lots of informantion to show proper error messages and do debugging.

While Lexer code may not look very efficient, compared to "magic" of parser generators, the main problem is not in the design of lexer code itself. One should always think about bottlenecks. Hexa is language for modern computers, not 20-centuries. Nowadays compiler mostly limited by the CPU cache **and whole compiler routine** from starting compiler binary (gcc and clang are so huge, it takes eons to load them on low-ram and no-ssd situations on every compilation) to perfroming transformations, hints calculation, optimization and final output.

Normally many people have an impression of "cheap" or "obvious" optimizations. Say, allocating a String for a textual token takes about 50% of lexer performance. Hmm...why do this at all? Let's store file offset and size! Nope. First, you'll have to store file contents in memory, store 32 bits offset + 16 bits size (already same memory as 6 ascii characters, Hexa uses only ASCII for identifiers). Okay, who cares about RAM (which is always AL-WA-YS swapped out thanks to your IDE opened (looking at my VSCode) thus you don't actually have free RAM ever), but how would you compare identifies to each other later? Oh, looping over characters every time? Hexa stores string only once in memory. Longer to allocate, but costs nothing to compare later, thus making `switch()` and `==` operators insanely cheap.

<!-- "thus" is a word of month -->

> Note: idiomatic Hexa preferres long self-descriptional identifier names. Longer names => longer comparison loops with classic approaches.

<!-- Related code: -->
<!-- Want to contribute? List of incomplete features: -->
