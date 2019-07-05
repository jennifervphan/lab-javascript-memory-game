var cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' }
];

var memoryGame = new MemoryGame(cards);
var openedCards = [];
var itemClick = [];
var items = [];
var moves = 0;
var score = 11;
memoryGame.shuffleCards();

function cardOpen(card) {
    openedCards.push(card);
    console.log(openedCards)
    var length = openedCards.length;
    if (length === 2) {
        if (openedCards[0] === openedCards[1]) {
            memoryGame.matched();
        } else {
            // setTimeout(function() { memoryGame.unmatched(); }, 1000);
            memoryGame.unmatched();
        }
        memoryGame.moveCounter();
        memoryGame.isFinished();
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    var html = '';
    memoryGame.cards.forEach(function(pic) {
        html += '<div class="card" data-card-name="' + pic.name + '">';
        html += '  <div class="back" name="' + pic.img + '"></div>';
        html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
        html += '</div>';
    });

    // Add all the div's to the HTML
    document.querySelector('#memory_board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.back').forEach(function(card) {
        card.onclick = function(e) {
            $(e.target).toggleClass("back front");
            $(e.target).next().toggleClass("front back");
            itemClick.push(e.target);
            items.push(e.target);
            var idClick = e.currentTarget.getAttribute("name");
            setTimeout(function() { cardOpen(idClick) }, 500);
        }
    });

});