---
layout: book
title: Why Hexa?
---

Consider adopting new programming language? :yum:

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

## Cons

| Feature | Implementation state |
|:-------|---------------------:|
| Still incomplete compiler | Version Alpha |
| Few bingings | Some subset of JavaScript, browser and node API |
| Package system is not done | In the works |
| Native targets barely work | In the works |
| Regular expressions are not yet done | Planned for 0.1 |
