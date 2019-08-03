[This is a draft]

- Hexa is like JavaScript, but has no JavaScript's feature x, y and z!
- Hexa is like Swift, but has no Swift's feature x, y and z!
- Hexa is like Haskell, but has no Haskell's feature x, y and z!
- etc

Hexa is **not** intended to be a subset or a superset of another language,
especially taking wrong parts.

And Swift, JavaScript, ... are **not** perfect languages from author's stand point.
If you fall in love with (say) Swift, it doesn't makes that Hexa should be Swift-on-steroids.
Idea of Hexa-as-superset-of-X was dropped many years ago.

Goal is to keep language simple and straitforward, and familiar to
developers coming from other languages.
Every feature was taken from strictly pragmatic position.
Features which didn't prove their usefullness,
albeit maybe looking common to you, didn't make their way into Hexa design.

For example, many languages forbid variable shadowing, but experience shows
this makes your code actually *worse*: buggy, vague and especially error prone
for manipulation (refactoring, copy-pasting, extending behaviour).
