var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
var passwordRegEx = /^[\u0020-\u007E]{8,64}$/;

console.log(usernameRegEx.test(undefined));