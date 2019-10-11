/* 

Prototype Refactor
*/

class GameObject { 
    constructor(attr) {
      this.name = attr.name;
      this.createdAt = attr.createdAt;
      this.dimensions = attr.dimensions;
      
   }
  
    speak() {
      console.log( `${this.name} makes a noise.`);
    }
  }

       class CharacterStats extends GameObject {
        constructor(devil) {
        super(devil);
      this.healthPoints = charAttributes.healthPoints;
      
    }
  
    speak() {
      console.log(`${this.name} Took Damage`);
    }
  }

 
    class Humanoid extends GameObject {
      constructor(attr) {
            super(name);
            this.team = attr.team;
            this.weapons = attr.weapons;
            this.language = attr.language;   
      }       
    speak(){
        console.log(`${this.name} Cookies & Milk!`);
    }
    
      }

      const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
          'Staff of Shamalama',
        ],
        language: 'Common Tongue',
      });
    
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
    
      console.log(mage.createdAt); // Today's date
      console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
      console.log(swordsman.healthPoints); // 15
      console.log(mage.name); // Bruce
      console.log(swordsman.team); // The Round Table
      console.log(mage.weapons); // Staff of Shamalama
      console.log(archer.language); // Elvish
      


      