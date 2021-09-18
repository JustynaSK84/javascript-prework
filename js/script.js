  {
    const playGame = function (playerInput) {
    clearMessages () ;
    const getMoveName = function (randomNumber){
      if(randomNumber  == 1){
        return 'kamień';
      }
      else if (randomNumber == 2){
        return 'papier';
      }
      else if (randomNumber == 3){
        return 'nożyce';
      }
      else {
        printMessage('Nie znam ruchu o id ' + randomNumber + '.');
        return 'nieznany ruch';
      }
    }

    const displayResult = function (argComputerMove, argPlayerMove){

      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
      }
      else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
      }
      else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      }
      else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      }
      else {
        printMessage ('nieznany ruch');
      }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    /*console.log('Wylosowana liczba to: ' + randomNumber);*/
    let argComputerMove = getMoveName(randomNumber);

    /* if(randomNumber == 1){
      computerMove = 'kamień';
    }
    else if(randomNumber == 2){
      computerMove = 'papier';
    }
    else if(randomNumber == 3){
      computerMove = 'nożyce';
    } */

    printMessage('Mój ruch to: ' + argComputerMove);
    /*let playerInput = prompt( 'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    /*console.log('Gracz wpisał: ' + playerInput);*/
    const argPlayerMove = getMoveName(playerInput);



    /* if(playerInput == '1'){
      playerMove = 'kamień';
    }
    else if(playerInput == '2'){
      playerMove = 'papier';
    }
    else if(playerInput == '3'){
      playerMove = 'nożyce';
    }*/
    printMessage('Twój ruch to: ' + argPlayerMove);

    displayResult(argComputerMove,  argPlayerMove);

  }

    document.getElementById('play-rock').addEventListener('click', function(){
    printMessage ('Wybrałeś kamień');
    playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
    printMessage ('Wybrałeś papier');
    playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage ('Wybrałeś nożyce');
    playGame(3);
    });
}
