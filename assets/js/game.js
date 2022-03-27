var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
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



var fight = function(enemyName) {
  

    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0 && enemyHealth > 0) {
        // place fight function code block here...
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT of SKIP to choose.');

        // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;         
        } 
        // if no(false), ask question again by running fight() again
        else {
            fight();
        } 

        // if player choses to skip and confirm and then stop the loop
     if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
     } 

        

       //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variale
    enemyHealth = Math.max(0, enemyHealth - damage);

    //Log a resulting message to the console to confirm that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);

    //Log a resulting message to the console to confirm that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
    
    } 
    }


    };

    
var startGame = function() {
    
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

// fight each enemy robot by looping over them and fighting them one at a time    
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let user know what round they are in, remember that arrays start at 0 so
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    // By multiplying Math.random() by 60, we've now specified a random range from 0 to 59.xx (remember, Math.random() will never be 1, so we would never get an even 60). We don't want decimal numbers cluttering up our game, though, so we can use Math.floor() to round down to the nearest whole number.
    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);

    // if the player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {

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

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    if (playerHealth > 0 && i < enemyNames.length - 1) {
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
                if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "upgrade":
            case "UPGRADE":    
                if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                break;

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


// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

startGame();

