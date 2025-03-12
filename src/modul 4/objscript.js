const person = {
    Name: 'Ali',
    age: 19,
    sayhello: function(){
        console.log('Hello');
        return this;
    },
    oneYearPass: function(){
        this.age ++;
        return this;
    },
    HowOldAreYou: function (){
        console.log("I am "+ this.age + " years old"); 
        return this;
    }
};
person.sayhello();

console.log(person.Name);

person.sayhello('Ali');
person.oneYearPass();
console.log(person.age);

person
.sayhello()
.oneYearPass()
.HowOldAreYou();