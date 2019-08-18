# Prepack-core: proposal-private-property

The prepack-core  for proposal-private-property.

 - Support private-property for class and object literal.
 - Testcases.



## Usage

```bash
# Pick this branch
> git clone https://github.com/aimingoo/prepack-core.git#proposal-private-property

# Init submodules
> git submodule init
> git git submodule update
#(OR recursived clone)
> git clone --recursive https://github.com/aimingoo/prepack-core.git#proposal-private-property

# Install packages
> npm install

# Launch repl
> npm run repl
...
```



## First testcase

```bash
# run first testcast
> npm run repl test/private-property/simple-class.js
100
200
> npm run repl test/private-property/simple-object.js
300
```


## History

* 2019.08.19	first release.