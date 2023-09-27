import { calcStatus, chooseRobotItem } from "../helpers";

describe('announceResult function', () => {
  let fakeState;

  beforeEach(()=> {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    }
  })

  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  })
})

describe('chooseRobotItem function', () => {
  test('given player choice and isCheating is false, returns a valid choice', () => {
    const isCheating = false;
    const playerSelection = "Axe"

    const result = chooseRobotItem(isCheating, playerSelection);
    const options = ['Axe', 'Tree', 'Moai'];
    expect(options.includes(result)).toBeTruthy();
  })

  test('given player choice and isCheating is true, returns the winning choice', () => {
    const isCheating = true;
    let playerSelection = "Axe"
    let result = chooseRobotItem(isCheating, playerSelection);

    expect(result).toBe('Moai');

    playerSelection = "Moai"
    result = chooseRobotItem(isCheating, playerSelection);

    expect(result).toBe('Tree');

    playerSelection = "Tree"
    result = chooseRobotItem(isCheating, playerSelection);

    expect(result).toBe('Axe');
  })
})