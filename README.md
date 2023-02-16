# hexalang.github.io

[Hexa Programming Language Project Homepage](https://hexalang.github.io/)

> Ensures safety, simplicity and performance!

![Hello](hello.png?raw=true)

## Translation

Add your native language to **`hexalang.github.io\src\Texts.tsx`**

## Repo Structure

The dist is hosted under `isekai` branch (root is `/`). PRs into `isekai` are not accepted. We should probably automate the builds with Actions.

The src can be found under [hexalang.github.io/hexalang.github.io/src](https://github.com/hexalang/hexalang.github.io/tree/kawaii/hexalang.github.io/src).
Files under the repo root folder may be mostly ignored.

To build:

```bash
# install yarn and compiler
npm install --global yarn
npm install -g typescript

cd hexalang.github.io
yarn install --frozen-lockfile
yarn start # test
yarn build
# pull for SSR... simple server side implementation due to limitations of GitHub Pages
node ssr.js
# now `build` can be copied onto `isekai`
```

## Fair Use Disclaimer

This website may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner.
The material contained in this website is distributed without profit for entertainment, research and educational purposes.
Only small portions of the original work are being used and those could not be used easily to duplicate the original work.

This should constitute a 'fair use' of any such copyrighted material (referenced and provided for in section 107 of the US Copyright Law).

If you wish to use any copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must obtain expressed permission from the copyright owner.

This disclaimer is based on https://fldh.coerll.utexas.edu/disclaimer-fair-use-statement
