function playGame (playerInput) {

function clearMessages ();



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
      if(argMoveId == 1){
        return 'kamień';
      }
      else if (argMoveId == 2){
        return 'papier';
      }
      else if (argMoveId == 3){
        return 'nożyce';
      }
      else {
        playGame('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    /* if(randomNumber == 1){
      computerMove = 'kamień';
    }
    else if(randomNumber == 2){
      computerMove = 'papier';
    }
    else if(randomNumber == 3){
      computerMove = 'nożyce';
    } */


    let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + argPlayerInput);

    let argPlayerMove = getMoveName(argPlayerInput);

    /* if(playerInput == '1'){
      playerMove = 'kamień';
    }
    else if(playerInput == '2'){
      playerMove = 'papier';
    }
    else if(playerInput == '3'){
      playerMove = 'nożyce';
    }*/


    console.log('moves:', argComputerMove, argPlayerMove);
      function displayResult(argComputerMove, argPlayerMove){
      playGame('Mój ruch to: ' + argComputerMove + '.');
      playGame('Twój ruch to: ' + argPlayerMove + '.');

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
          playGame('Ty wygrywasz!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
          playGame('Ty wygrywasz!');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
          playGame('Ty wygrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
          playGame('Komputer wygrywa!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
          playGame('Komputer wygrywa!');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
          playGame('Komputer wygrywa!');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
          playGame('Remis!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
          playGame('Remis!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
          playGame('Remis!');
        }
        else {
          playGame ('nieznany ruch');
        }
      }
      displayResult(argComputerMove,  argPlayerMove);

    document.getElementById('play-rock').addEventListener('click', function(){
      playGame(1);}

    document.getElementById('play-paper').addEventListener('click', function(){
      playGame(2);}

    document.getElementById('play-scissors').addEventListener('click', function(){
      playGame(3);}
}
