import { calcStatus, chooseRobotItem } from '../helpers'


describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', ()=> {
  test('given player choice and isCheating is true, returns the winning choice', ()=> {
    const isCheating = true;

    let playerSelection = 'Axe';
    let result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Moai');

    playerSelection = 'Tree';
    result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Axe');

    playerSelection = 'Moai';
    result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Tree');
  });

  test('given player choice and isCheating is false, return a valid choice', () => {
    const isCheating = false;
    const playerSelection = 'Axe';

    const result = chooseRobotItem(isCheating, playerSelection);
    const choices = ['Moai', 'Axe', 'Tree'];
    expect(choices.includes(result)).toBeTruthy();
    // expect(result).toBe('Axe' || 'Tree' || 'Moai');
  });
});