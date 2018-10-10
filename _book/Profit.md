---
layout: book
title: Why Hexa?
---

Consider adopting new programming language? :yum:

## Goals and philosophy

Main goal of Hexa is... software. This is not a language on its own, it is a tool.

All design decisions a very pragmatic, and aimed for painless writing, deploying, and maintaining of software.
Second goal is to being friendly for small teams/businesses, individuals and open source communities.

Most languages provide nonsense like unicode characters in variable names and even emojis,
tabs-vs-spaces wars, non-working optional safety. Hexa don't.

Hexa strictly defines that making software is really, really hard. And maintaining others code is extra harder.
Reading code is hard. Debugging is hard. Optimizing is hard. Deploying buggy software is useless and harmful.

Hexa is **not** idealistic. Some things look irrational or you see that it is very logical to add feature xyz?
Programming is *not* about logic since 1960.
Or, maybe, "hey, we already have C++"? Hey, how many apps you did in C++? None?

Sometimes coding may look not very fun, but you don't really care when your *ideas* come to *life* and *prosper*. 

Software deserves to be great, and problems to be solvable.

## Use cases

- High performance, portable, cross platform **native** software
- Software based on web technologies
- Scripting and automation
- Low code friction: easy to join existing project
- Scaling and maintenance

## Pros

| Feature | Implementation state |
|:-------|---------------------:|
| Compiles to (human-readable!) JavaScript | Mostly complete |
| Compiles to native binaries with LLVM | In the works |
| Compiles to C | In the works |
| Ultimately crossplatform (for development, i.e. Windows, macOS, Linux) | Yes |
| Ultimately crossplatform (for targeting) | Currently JavaScript (web, node, scripting) |
| Fast compilation | Nearly instantaneous |
| Stable syntax | Most of the language will stay as-is |
| Compiles itself | Currently with node, LLVM in the works |
| Syntax is not obscure, common paradigms | Yes |
| Very fast native targets | Yes, semantically guaranteed |
| Low memory overhead | No tracing garbage collection |
| Transpiles to other programming languages | Yes, mostly stable [IR](https://en.wikipedia.org/wiki/Intermediate_representation), pluggable targets in the works
| Imperative metaprogramming | In the works |
| Scripting (running single files without compilation and [REPL](https://en.wikipedia.org/wiki/Read-eval-print_loop)) | Sometimes works |
| Null-safety | In the works |
| Exception-safety | In the works |
| Helpful error messages | Compiler mostly understands your code and intention |

## Cons

| Feature | Implementation state |
|:-------|---------------------:|
| Still incomplete compiler | Version Alpha |
| Few bingings | Some subset of JavaScript, browser and node API |
| Package system is not done | In the works |
| Native targets barely work | In the works |
| Regular expressions are not yet done | Planned for 0.1 |
