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

  /*if(randomNumber == 1){
  computerMove = 'kamień';
  } else if (randomNumber == 2){
    computerMove = 'papier';
  } else if (randomNumber == 3){
    computerMove = 'nożyce';

  }*/

  printMessage('Mój ruch to: ' + computerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2'){
    playerMove = 'papier';
  } else if (playerInput == '3'){
    playerMove = 'nożyce';
    } */


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
    
  /*if( computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!');
   }
   if( computerMove == 'kamień' && playerMove == 'nożyce'){
     printMessage('Przegrywasz!');
   }
   if( computerMove == 'kamień' && playerMove == 'kamień'){
     printMessage('Remis!');
   }
   if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
    }
    if( computerMove == 'papier' && playerMove == 'kamień'){
   printMessage('Przegrywasz!');
   }
    if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'nożyce' && playerMove == 'papier'){
   printMessage('Przegrywasz!');
    }
    if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
    }
    if( playerMove == 'nieznany ruch'){
      printMessage('wybierz właściwą liczbę')
  }*/
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