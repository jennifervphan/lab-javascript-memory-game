class MemoryGame {
    constructor(card) {
        this.cards = cards;
    }
    shuffleCards() {
        this.currentIndex = this.cards.length, this.temporaryValue, this.randomIndex;
        while (this.currentIndex !== 0) {
            this.randomIndex = Math.floor(Math.random() * this.currentIndex);
            this.currentIndex -= 1;
            this.temporaryValue = this.cards[this.currentIndex];
            this.cards[this.currentIndex] = this.cards[this.randomIndex];
            this.cards[this.randomIndex] = this.temporaryValue;
        }
        return this.cards;
    }
    moveCounter() {
        moves++;
        document.getElementById("pairs_clicked").innerHTML = moves;
        openedCards = [];
        itemClick = [];

    }
    matched() {
        score++;
        document.getElementById("pairs_guessed").innerHTML = score;
        $(itemClick[0]).addClass("blocked");
        $(itemClick[1]).addClass("blocked");

    }
    unmatched() {

            $(itemClick[0]).toggleClass("back front");
            $(itemClick[0]).next().toggleClass("front back");
            $(itemClick[1]).toggleClass("back front");
            $(itemClick[1]).next().toggleClass("front back");
            console.log("Wrong")

        }
        // checkIfPair(card1, card2) {

    // }
    isFinished() {
        let x = document.getElementById("pairs_guessed").innerHTML;
        if (x === "12") {
            $(".hide").toggleClass("hide show");
            // alert("YOU WIN!")
            // let playAgain = prompt("Wanna play again?(yes/no)");
            // if (playAgain === "yes") {
            //     location.reload();
            // }
            $("#again").click(function() {
                location.reload();
                $(".show").toggleClass("show hide");

            })
        }
    }

}