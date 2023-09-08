function Character(name, weapon, hp)
{
this.name = name;
this.weapon = weapon;
this.hp = hp;

this.attack = function(character2){
	character2.hp -= this.weapon.damage;

	console.log(this.name + " attacks " + character2.name)

	if(character2.hp <= 0)
	{
	console.log(character2.name + " is dead")
	}
	else
	{
	console.log(character2.name + " now has " + character2.hp)
	}
}

}

function Weapon(name, damage)
{
	this.name = name;
	this.damage = damage;
}

const shotgun = new Weapon("shotgun", 50)

const pistol = new Weapon("pistol", 25)

const bazooka = new Weapon("bazooka", 100)

console.log(pistol.name);

const dennis = new Character("Dennis", pistol, 100);

const claire = new Character("Claire", bazooka, 100);

dennis.attack(claire);

claire.attack(dennis);