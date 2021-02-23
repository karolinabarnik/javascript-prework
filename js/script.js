function playGame(playerInput) {


    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if (randomNumber === 1) {
        computerMove = 'kamień';
    } else if (randomNumber === '2') {
        computerMove = 'papier'
    } else if (randomNumber === '3') {
        computerMove = 'nożyce'
    }*/


    let playerMove = getMoveName(randomNumber);

    if (getMoveName === '1') {
        return 'kamień';
    } else if (getMoveName === '2') {
        return 'papier'
    } else if (getMoveName === '3') {
        return 'nożyce'
    } else {
        printMessage('Nie znam ruchu' + randomNumber + '.');
        return 'nieznay ruch'
    }

    printMessage('Twój ruch to: ' + playerMove);

    let displayResult = function (argComputerMove, argPlayerMove) {
        printMessage('Zagrałem' + argcomputerMove + ',a Ty' + playerMove);

        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || {
                printMessage('Ty wygrywasz!');
            }
        else if (argComputerMove === argPlayerMove) {
            printMessage('Remis!');
        } else if (argPlayerMove === 'nieznany ruch') {
            printMessage('Zagraj jeszcze raz!');
        } else {
            printMessage('Ja wygrywam!');
        }
    }
}

document.getElementById('play-rock').addEventListener('click', playGame() {
    playGame(1);
    printMessage('Wybrałeś kamień')
});

document.getElementById('play-paper').addEventListener('click', playGame() {
    playGame(2);
    printMessage('Wybrałeś papier')
});

document.getElementById('play-scissors').addEventListener('click', playGame() {
    playGame(3);
    printMessage('Wybrałeś nożyce');
});

}
