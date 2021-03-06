---
layout: book
title: Third-party compilation targets
---

DRAFT

Code generation is based on concept of Nice Nodes. This technology would be improved over time.

Note: it's currently impossible to add targets dynamically to the compiler, you have to modify compiler code. Places of modification:

Feel free to create pull requests for new targets!

Note: Hexa follows pragmatic approach for language targets.
**Don't** create 'universal' language targets, like "Lua", "Lisp", "JavaScript+TypeScript" or "Java+C#" etc.

Instead, create separate targets for each specific goal or platform.
Like "Lua 5 full-featured target" vs "Lua 5 performance-oriented target" vs "LuaJIT 2 target",
"TypeScript target" vs "JavaScript ES4 for IE6/etc", "PHP5+" vs "PHP7+", "AutoCad Lisp" vs "Closure",
"Arduino C" vs "Clang with full-LLVM intrinsics", "Unity Script C#" vs "C# 8.0", etc.

'Universal' targets always lack features and performance, and much harder to develop, test and maintain.

/targets/third-party/ your-target/

## Available attributes

- `@rename`
- `@require`
- `@operator`

[Normalizer] will lower *target users* code, so even if your generator supports only basics,
most of the Hexa will work anyway. For example, most nested functions are converted to global ones,
so your may show error message "this function cannot be lowered to global one, nested functions are not supported"
if your target don't support them (or you don't implement them for performance or any reasons),
but have most of the "normal" code still work unmodified (like third-party libraries).
