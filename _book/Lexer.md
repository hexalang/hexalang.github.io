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

<!-- Related code: -->
