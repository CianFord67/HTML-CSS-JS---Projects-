var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3"); //instances of each circle 
var circle4 = document.getElementById("circle4");
var circle5 = document.getElementById("circle5");

var Start_Button = document.getElementById("button1");

var BaseLevel = 1;
var HighScore = 1;

var Amount = BaseLevel;

Start_Button.addEventListener("click", function() { //start button 
    colorchange1();
    colorchange2();
    colorchange3();
    colorchange4();
    colorchange5();

    setTimeout(() => {
        reset();
    }, 400);

    setTimeout(() => {
        Flashes(Amount+2, 750);
    }, 3000);

    Level(); //level tracker code
});

function Level() {
    var CurrentLevel = document.getElementById("CurrentLevel");
    var BestScore = document.getElementById("BestScore");

    
    var BaseLevel = parseInt(CurrentLevel.innerText);
    var HighScore = parseInt(BestScore.innerText);

    CurrentLevel.innerText = BaseLevel + 1;
    BestScore.innerText = HighScore + BaseLevel;

    // Set the amount of flashes to match the current level
    Amount = BaseLevel;

    // Call the game level function based on the current level
    switch (BaseLevel) {
        case 1:
            Game_Level1();
            break;
        case 2:
            Game_Level2();
            break;
        case 3:
            Game_Level3();
            break;
        case 4:
            Game_Level4();
            break;
        case 5:
            Game_Level5();
            break;
        default:
            break;
    }
}

function Game_Level1() {
    alert("Level 1");
}

function Game_Level2() {
    alert("Level 2");
}

function Game_Level3() {
    alert("Level 3");       /* base cases for each level*/
}

function Game_Level4() {
    alert("Level 4");
}

function Game_Level5() {
    alert("Level 5");       
}
/*-------------------------------------------------------------- brain of the game */ 
function Flashes(amount_of_flashes, interval) {
    const sequences = [circle1, circle2, circle3, circle4];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function flashCircle(circle, delay) {
        setTimeout(() => {
            circle.classList.add('selected');
            setTimeout(() => {
                circle.classList.remove('selected');
            }, interval);
        }, delay);
    }

    for (let i = 0; i < amount_of_flashes; i++) {
        const randomIndex = getRandom(0, sequences.length - 1);
        const randomCircle = sequences[randomIndex];
        const delay = i * interval;
        flashCircle(randomCircle, delay);
    }
}
/*-------------------------------------------------------------- */
function reset() {
    circle4.style.background = 'blue';
    circle3.style.background = 'yellow';
    circle2.style.background = 'green';
    circle1.style.background = 'red';
    
}
// flashing at start of the game 
function colorchange1() {
    var circle5 = document.getElementById("circle5");
    circle5.style.background = 'green';
}

function colorchange2() {
    var circle4 = document.getElementById("circle2");
    circle4.style.background = 'black';
}

function colorchange3() {
    var circle3 = document.getElementById("circle3");
    circle3.style.background = 'black';
}

function colorchange4() {
    var circle2 = document.getElementById("circle4");
    circle2.style.background = 'black';
}

function colorchange5() {
    var circle1 = document.getElementById("circle1");
    circle1.style.background = 'black';
}

var circle = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
/*-------------------------------------------------------------- */
circle.addEventListener('mouseenter', function() {
    circle.classList.add('hover-effect');
});

circle.addEventListener('mouseleave', function() {
    circle.classList.remove('hover-effect');
});
/*-------------------------------------------------------------- */
circle2.addEventListener('mouseenter', function() {
    circle2.classList.add('hover-effect');
});

circle2.addEventListener('mouseleave', function() {
    circle2.classList.remove('hover-effect');
});
/*-------------------------------------------------------------- */
circle3.addEventListener('mouseenter', function() {
    circle3.classList.add('hover-effect');
});

circle3.addEventListener('mouseleave', function() {
    circle3.classList.remove('hover-effect');
});
/*-------------------------------------------------------------- */
circle4.addEventListener('mouseenter', function() {
    circle4.classList.add('hover-effect');
});

circle4.addEventListener('mouseleave', function() {
    circle4.classList.remove('hover-effect');
});
/*-------------------------------------------------------------- */

function End() {
    reset(); // Reset all circles 
    var CurrentLevel = document.getElementById("CurrentLevel");
    CurrentLevel.innerText = '0'; // Set the score to 0
    alert("Game Over!!!!!"); // Display game over message
}

/*unfortutualy i was un able to get the rest of the game to work such as the timer and more random levels till the game ends 
so i gave 5 levels as a base case game to outline the working code other then the flahed cirlce click tracker everything else is 
functional, i encluded a reset buttoon on the webpage screen just so you can see how the user would reset the game / how the game would reset*/