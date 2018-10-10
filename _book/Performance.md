---
layout: book
title: Performance
---

! This is a draft !

## Environment

- Hexa
- JavaScript
- C++ 
  - C++17
  - Compiler:
  
Machine One
- Type: Desktop PC (64-bit only)
- CPU: ~.~~GHz ~~~, ~ Cores, ~ HW Threads
- OS: Windows 10

Machine Two
- Type: Tablet PC (32-bit only)
- CPU: ~.~~GHz Intel Atom ~~~, 4 Cores, 4 HW Threads
- OS: Windows 10

## Exception handling

Something like that:

```js
//(()=>{ "use strict"
function throws(i) {
 if (i % 2 == 0) throw 123
}

function calls(i) {
 if (i % 2 == 0) throws(i * 3)
}

function catches(i) {
 try {
   if (i % 2 == 0) calls(i * 3)
 } catch() return i - 1
 return i + 1
}

let i = 0
let result = 0
while (i < 0000) result += catches(i)
console.log(result, i)
//})()
```

|Machine|Target|Iterations|Time|Comparison|
|:-:|:-:|:-:|:-:|:-:|
|Desktop|JavaScript|1000|1000ms|1.0|
