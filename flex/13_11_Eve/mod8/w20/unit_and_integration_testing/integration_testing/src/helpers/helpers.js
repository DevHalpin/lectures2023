export const calcStatus = (playerSelection, compSelection) => {
    const lookup = {
      'Axe': 'Tree',
      'Tree': 'Moai',
      'Moai': 'Axe'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  
  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };

  export const chooseRobotItem = (isCheating, playerItem) => {

    const lookup = {
      'Tree': 'Axe',
      'Moai': 'Tree',
      'Axe': 'Moai'
    }

    if (isCheating) {
      return lookup[playerItem]
    }

    const choices = ['Moai', 'Axe', 'Tree'];
    const randomValue = Math.floor(Math.random() * choices.length);
    return choices[randomValue];

  };

