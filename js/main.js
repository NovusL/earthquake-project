
// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() {
        // Function called first to load all the assets
        game.load.image('blue', 'img/blue.png');
        game.load.image('green', 'img/green.png');
        game.load.image('red', 'img/red.png');
        game.load.image('yellow', 'img/yellow.png');
        game.load.image('orange', 'img/orange.png');
    },

    create: function() {
        // Fuction called after 'preload' to setup the game

        //Change the background color of the game to darkgray
        game.stage.backgroundColor = '#71c5cf';

        //Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);


        this.blue = game.add.sprite(100, 245, 'blue');

        //Add the phyiscs to the blue
        //Needed for: movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.blue);


        //Add gravity to the blue to make it fall
        this.blue.body.gravity.y = 1000;

        //Call the 'jump' function when the spacekey is hit
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        spaceKey.onDown.add(this.jump, this);

    },

    update: function() {
        // Function called 60 times per second
        //If the blue is out of the screen (too high or too low)
        //Call the 'restartGame' function
        if(this.blue.y < 0 || this.blue.y > 725)
            this.restartGame();

    },

    //Make the blue jump
    jump: function() {
        //Add a vertical velocity to the blue
        this.blue.body.velocity.y = -350;
    },

    //Restart the game
    restartGame: function() {
        //Start the 'main' state, which restarts the game
        game.state.start('main');
    },
};




// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(652, 725, Phaser.AUTO, 'game_div');

// Add and start the 'main' state to start the game
game.state.add('main', main_state);

//Start the state to actually start the game
game.state.start('main');