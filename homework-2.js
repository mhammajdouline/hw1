class cat{
    constructor (name,color,age){
        this.name = name;
        this.color = color;
        this.age = age;

    }
    plays(){
        console.log(`${this.name} enjoys playing outside.`);
    }
    sleeps(){
        console.log(`${this.name} is ${this.age} years old and enjoys taking naps.`);
    }
    eat(){
        console.log(`${this.name} is a ${this.color} cat that loves to eat.`);
    }
}

const cat1= new cat('Raya','black',1);
const cat2= new cat('Lala','gray',3);

console.log(cat1);
console.log(cat2);


cat1.plays();
cat1.sleeps();
cat1.eat();

cat2.plays();
cat2.sleeps();
cat2.eat();

class Pirate{

    constructor(name,age,weapon){
        this.name = name;
        this.age = age;
        this.weapon = weapon;
    }

    fight(){
        console.log(`${this.name} loves to fight at sea.`);


    }

    steal(){
        console.log(`${this.name} just stole a ${this.weapon}`);

    }

    sail(){
        console.log(`${this.name} is ${this.age} years old and spent half those years sailing. `);

    }

    }
const jollyRoger = [
    new Pirate ('Jason',40,'rifle'),
    new Pirate ('John',36,'knife'),
    new Pirate ('Smith',30,'sword')
]

const blackPearl = [
    new Pirate ('Barbie',25,'sparkly dust'),
    new Pirate ('cinderella',22,'grenade'),
    new Pirate ('Hollow',25,'bomb')
]

jollyRoger.forEach((pirate) =>{ console.log(`name:${pirate.name},age:${pirate.age}weapon:${pirate.weapon}`);

});
blackPearl.forEach((pirate) => { console.log(`name:${pirate.name},age:${pirate.age},weapon:${pirate.weapon}`);
});