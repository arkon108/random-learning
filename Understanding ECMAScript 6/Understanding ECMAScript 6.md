# Understanding ECMAScript 6

## Block Bindings

The problem with `var` - hoisting: regardless of where the variable gets declared with `var`, it's treated as it was declared at the top level (global scope). As this can be confusing, ES6 introduced block-level scoping, for greater control over a variable's life cycle.

Block scopes are also called _lexical scopes_. They are created in *function*, or within a *{ block }*

### `let` declaration

Basically equivalent to `var` except they aren't hoisted - and limited by the block within which they've been created.

### `const` declaration

Once set, the value can't be changed, they're considered _constants_. If the constant holds an object, it's value can be modified.

### Best practice

Current best practice is to use `const` by default, and `let` only when the variable does need to change. This ensures a certain level of immutability which serves as a protection from potential bugs.


## Strings and Regular Expressions