---
layout: book
title: Unit testing (draft)
---

Most classic languages don't have built-in unit testing features, while modern ones add syntax sugar for "inline' testing.

While inline testing looks good on the surface, it is not suitable for anything complicated. Imagine having [more than ten lines] of test cases or [mocking class hierarchies] to validate business logic. Code will become bloated and, depending on language implementation, semantically limited. It is good practice to not mix documentation, write books and articles separately, so how tests are different?

Hexa takes realistic approach to testing, thus, making it conventional to add testable build schemes to your project.

While this is not innovational, it still makes you more confident-conscious about common way of testing third-party code, and doing same.

debugOnly
releaseOnly

```json
{ "testOnly": [ "testA.hexa", "testB.hexa" ] }
```
