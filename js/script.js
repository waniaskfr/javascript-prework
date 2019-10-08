function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
    }
    if(argMoveId == 3){
        return 'nożyce';
    }
    
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);


  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Wygrywasz';
    } if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Przegrywasz!';
    } if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return 'Remis!';
    } if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Remis!';
    } if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Wygrywasz!';
    } if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Przegrywasz!';
    } if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Przegrywasz!';
    } if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return 'Remis!';
    } if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Wygrywasz!';
      } 
    }

  printMessage('Wynik: ' + displayResult(computerMove, playerMove));
    
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});