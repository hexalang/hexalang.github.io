---
layout: post
title: Bootstrap the compiler
---

It was a long standing project and hard research! So it is *the* time to stop over-engineering and dive into implementation and dogfooding.

Current task is to go wild and make Hexa a self-contained, i.e. self compilable.

Unfortunately, the easiest way to achieve this is to make a compiler prototype in H*a*xe, convert **it's** *source* to H*e*xa, compile it with H*a*xe's to finally generate H*e*xa's compiler, to ..well ..finally compile H*e*xa compiler with H*e*xa compiler. Sounds non-trivial, huh?

Actually, H*a*xe allows to implement automatic source conversion with **macro** API. So most of the time I am writing H*a*xe code, which compiles H*e*xa code, generated from *this* code which parses *this same code*. Meh.

This shows to work really well, so lets fill a to-do. Also you may expect the **macro** to be published in the https://github.com/hexalang/toHexa repo. I don't believe it will directly re-compile something like OpenFL but who knows.

By the way this makes unit testing a lot simpler cause one may reuse H*a*xe' unit tests he-he.
