# Prepack-core: proposal-private-property

The prepack-core  for proposal-private-property.

 - Support private-property for class and object literal.
 - Testcases.



## Usage

```bash
# Pick this branch
> git clone -b proposal-private-property https://github.com/aimingoo/prepack-core

# Init submodules
> git submodule init
> git submodule update
#(OR, recursived clone)
> git clone -b proposal-private-property --recursive https://github.com/aimingoo/prepack-core

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
> npm run repl test/private-property/simple-class.js
100
200
> npm run repl test/private-property/simple-object.js
300
```


## History

* 2019.08.19	first release.

