

// (Custom)Objects can better help keep data coupled together
/* var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; */
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, //comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }, //comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
  }
};


/*console.log(enemy.name);
console.log(enemy.name.length);
console.log(enemy.name[0]);
console.log(enemy.name[3]);*/
// prints 3.14
console.log(Math.PI);
// rounds to the nearest whole number(4)
console.log(Math.round(4.4));
// prints the square root (5)
console.log(Math.sqrt(25));
// prints 100
console.log(Math.max(10, 20, 100));
// prints 0
console.log(Math.max(0, -50));



var fight = function(enemy) {
  

    // repeat and execute as long as the enemy-robot is alive
    while (enemy.health > 0 && enemy.health > 0) {
        // place fight function code block here...
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT of SKIP to choose.');

        // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;         
        } 
        // if no(false), ask question again by running fight() again
        else {
            fight();
        } 

        // if player choses to skip and confirm and then stop the loop
     if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerInfo.name + " has chosen to skip the fight!");
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
     } 

        

       //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variale
    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console to confirm that it worked
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    
    //check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    //Log a resulting message to the console to confirm that it worked
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    //check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
    
    } 
    }


    };

    
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy andraid",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

    
var startGame = function() {
    
        // // reset player stats
        // playerInfo.health = 100;
        // playerInfo.attack = 10;
        // playerInfo.money = 10; this has been consolidated with..
        playerInfo.reset();

// fight each enemy robot by looping over them and fighting them one at a time    
for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        // let user know what round they are in, remember that arrays start at 0 so
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyHealth before starting new fight
    // By multiplying Math.random() by 60, we've now specified a random range from 0 to 59.xx (remember, Math.random() will never be 1, so we would never get an even 60). We don't want decimal numbers cluttering up our game, though, so we can use Math.floor() to round down to the nearest whole number.
    pickedEnemyObj.health = randomNumber(40,60);
    fight(pickedEnemyObj);

    // if the player is still alive and we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, take them to the store() function
        if (storeConfirm) {
        shop();
        }
    }
}

else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
    }
  }
  //start the game when the page loads
endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!

    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }
    }

    var shop = function() {
        //ask player what they'd like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
        );

        //use switch when checking a single value against multiple possibilities(or cases)
        switch (shopOptionPrompt) {
            case "REFILL": //since the "or" operator does not work in switches
            case "refill":
                

             

            case "upgrade":
            case "UPGRADE":    
               

            case "leave":
            case "LEAVE":    
                window.alert("Leaving the store.");
                
                // do nothing, so function will end
                break;

                default:
                    window.alert("You did not pick a valid option. Try again.");

                    // call shop() again to force player to pick a valid option
                    shop();
                    break;
         }

       };
    }  

    // ask player if they'd like to play again

var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // restart the game
    startGame();
}else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }




startGame();

