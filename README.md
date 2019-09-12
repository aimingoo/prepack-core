# Prepack-core: proposal-public-property

The prepack-core  for proposal-public-property.

 - Support public-property for class and object literals.
 - Testcases.



## Usage

```bash
# Pick this branch
> git clone -b proposal-public-property https://github.com/aimingoo/prepack-core

# Init submodules
> git submodule init
> git submodule update
#(OR, recursived clone)
> git clone -b proposal-public-property --recursive https://github.com/aimingoo/prepack-core

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
> npm run repl test/public-property/simple-public.js
100
100
100
200
```


## History

* 2019.09.13	first release.

