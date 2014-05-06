var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
var passwordRegEx = /^[\u0020-\u007E]{8,64}$/;



function Person(name){
    this.name = name;

    this.sayHowdy = function() {
    	console.log('Howdy!');
    };

}

Person.prototype.getName = function(){
    console.log(this.name);
};


var person = new Person("George");

person.getName();
person.sayHowdy(); 
console.log(person);