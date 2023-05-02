export class Dog{
    constructor(name, breed, age, gender, colors, foodName, typeDiet){
        this.name=name;
        this.breed=breed;
        this.age=age;
        this.gender=gender;
        this.colors=colors;
        this.favFood=new Food(foodName,typeDiet);
    }


    sayHallo(){
        console.log('bau')
    }
}

class Food{
    constructor(name, diet)
        {
        this.name=name;
        this.diet=diet;
        }
}