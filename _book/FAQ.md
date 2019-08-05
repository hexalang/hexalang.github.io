---
layout: book
title: FAQ
---

- Hexa is like JavaScript, but has no JavaScript's feature x, y and z!
- Hexa is like Swift, but has no Swift's feature x, y and z!
- Hexa is like Haskell, but has no Haskell's feature x, y and z!
- etc

Hexa is **not** intended to be a subset or a superset of another language,
especially taking wrong parts.

And Swift, JavaScript, ... are **not** perfect languages from author's stand point.
If you fall in love with (say) Swift, it doesn't makes that Hexa should be Swift-on-steroids.
Idea of Hexa-as-superset-of-X was dropped many years ago.

Goal is to keep language simple and straightforward, and familiar to
developers coming from other languages.
Every feature was taken from strictly pragmatic position.
Features which didn't prove their usefullness,
albeit maybe looking common to you, didn't make their way into Hexa design.

For example, many languages forbid variable shadowing, but experience shows
this makes your code actually *worse*: buggy, vague and especially error prone
for manipulation (refactoring, copy-pasting, extending behaviour).
Hexa allows variable shadowing, but disallows unicode in variable names.

- Is Hexa for advanced developers?

Hexa is strongly for "averages". It's not very simple, but it's designed to
behave predictably, show helpful error messages, help you to write safe
and fast code **by default**.

For example, Hexa has simple typed `Array<T>`. Yeah, more advanced developer
will prefer vector or LIFO/FIFO queue or sparse/dense array or single/double linked
list etc etc etc. But the only the super-advanced developer will say which is not
only better for the task, but also has better performance (in a non-sintetic environment!).
And only the +-advanced developers would be capable to read and maintain that code.

But... I **really really hate** code which is **just** 10% faster but 100% more **complicated**.
Hexa' arrays may do most of the stuff easily with adequate performance. It's just a one simple type,
generic, specialized at compiler type, known by every Hexa and JavaScript/Python/Java/etc developer.

If you feel advanced and sane to **not** overoptimize every line of code, you may go native
and implement some parts like you would in C (or just use external lib).

In comparison, languages like Jai (Jonathan Blow) or Zig (Andrew Kelley) have different visions:

- Jai is advanced developers only (as stated by the creator) and all about performance (feel risky?)
- Zig is all about (safe!) systems programming, with pointers, allocators and all, while it way better than C
- I couldn't write even a single win32 app in Rust ("lets overcomplicate everything"-oriented programming)
- D requires you to have
[a data storage device implanted in your brain](https://en.wikipedia.org/wiki/Johnny_Mnemonic_(film)) 
even to remember how that keyword behaves **this** time 
(`@nogc`, `@safe` but `pure`, `nothrow`? `return ref` vs `return scope` what? `immutable` vs `const`, `static this`?? `alias this`???
oh wait there is also `return scope ref`...).
