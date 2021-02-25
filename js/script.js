function playGame(playerInput) {


    function getMoveName(randomNumber) {
        if (randomNumber === 1)
            return 'kamień';
        else if (randomNumber === 2)
            return 'papier';
        else if (randomNumber === 3)
            return 'nożyce';
    }

    function displayResult(argComputerMove, argPlayerMove) {

        if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove === argPlayerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Ja wygrywam!');
        }
    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Wybór komputera: ' + computerMove);

    displayResult(computerMove, playerMove);

    printMessage('--------------------');
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
