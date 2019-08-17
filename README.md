# Prepack-core

Prepack-core isn't prepack:

 - no react and jsx
 - no bundler
 - no optimizer
 - no transformer

The core is interpreter base ECMAScript 2016.

> **Prepack**: See the official [prepack.io](https://prepack.io) website for an introduction and an [interactive REPL playground](https://prepack.io/repl.html).



## Use Prepack-core

Install the CLI via npm,

```bash
# install dependencies
> npm install

# build interpreter
> yarn build
#(OR)
> npm run build-repl

# enter repl-cli
> yarn repl
#(OR)
> npm run repl

# run .js file
> yarn repl ./test.js
#(OR)
> npm run repl ./test.js
#(OR)
> node ./bin/prepack-repl.js ./test.js
```



## Update

If you want coding with source:

```bash
> yarn watch
```
validate changes:

```bash
> yarn validate
```

Or bundle a standalone repl-cli:

```bash
> yarn bundle
```


## License

The Prepack-core is fork of Prepack.

Prepack is BSD-licensed. We also provide an additional patent grant.