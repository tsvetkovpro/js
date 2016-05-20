// let vs. const
// Constants Are Read-only. Once assigned, constants cannot be assigned a new value.
// Constants Are Block Scoped. Variables declared with const are scoped to the nearest block.
//In most cases, let and const will behave very similarly. Consider the semantics when choosing one over the other


// Use let when variables could be reassigned new values
let loadingMessage = "This might take a while...";
let currentAge = 50;
let totalCost = cost + tax;

// Use const when new variables are not expected to be reassigned new values
const MAX_USERS = 3;
const SEPARATOR = "%%";
const ALLOW_EDIT = false;

