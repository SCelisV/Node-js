// There are two operators for categorizing values: typeof is mainly used for primitive values, while instanceof is used for objects.
// typeof looks like this:

typeof value // It returns a string describing the “type” of value. 

> typeof true
'boolean'
> typeof 'abc'
'string'
> typeof {} // empty object literal
'object'
> typeof [] // empty array literal
'object'

// all results of typeof
// Operand	| Result

// undefined | 'undefined'

// null | 'object'

// Boolean value | 'boolean'

// Number value | 'number'

// String value | 'string'

// Function | 'function'

// All other normal values | 'object'

// (Engine-created value) | JavaScript engines are allowed to create values for which typeof returns arbitrary strings (different from all results listed in this table).

// typeof null returning 'object' is a bug that can’t be fixed, because it would break existing code. 
// It does not mean that null is an object.



value instanceof Constr // instanceof looks like this

// It returns true if value is an object that has been created by the constructor Constr 
// (see Constructors: Factories for Objects - http://speakingjs.com/es5/ch01.html#basic_constructors). 
// Here are some examples:

var b = new Bar();  // object created by constructor Bar
b instanceof Bar
true
> {} instanceof Object
true
> [] instanceof Array
true
> [] instanceof Object  // Array is a subconstructor of Object
true
> undefined instanceof Object
false
> null instanceof Object
false