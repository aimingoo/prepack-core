# Prepack-core: proposal-protected-property

The prepack-core  for proposal-protected-property.

 - Support protected-property for class.
 - Testcases.



## Usage

```bash
# Pick this branch
> git clone -b proposal-protected-property https://github.com/aimingoo/prepack-core

# Init submodules
> git submodule init
> git submodule update
#(OR, recursived clone)
> git clone -b proposal-protected-property --recursive https://github.com/aimingoo/prepack-core

# Install packages
> npm install

# Install babel and yarn, build it
> npm run build-repl
# (OR, with yarn)
> npm install -g yarn
> yarn build

# Launch repl
> npm run repl
...
```



## First testcase

```bash
# run first testcase
> npm run repl test/protected-property/simple-class.js
100
200
```


## History

* 2019.08.20	first release.

