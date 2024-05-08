### Requirements of our project
    The player begins with five "attempts"
    The computer should select a number between 1 and 100
    The player is asked to guess this number
    If the player guesses wrong
    They lose an "attempt"
    They are told if the guess was too high
    They are told if the guess was too low
    If the player runs out of attempts, they lose
    Tell the player they have lost
    Let them know what the number was
    If the player guesses the number
    Let them know how many attempts it took them
    Congratulate them on their success
    If the player wins or loses, offer them a way to play again
    Their attempts will be set back to five
    A new number will be selected by the computer

### Logic Provided by Gemini (AI)
2.  Designing the Game Model (Logic):

    Create a model named Game (or GuessingGame) to handle the game logic.

    Inside the Game model, define attributes:

    number (integer): The randomly chosen number to guess.
    attempts_remaining (integer): Tracks remaining attempts (starts at 5).
    game_over (boolean): Tracks if the game is finished (win or lose).
    Implement methods:

    start_game: Generates a random number (1-100) and sets attempts_remaining to 5.
    check_guess(guess):
    Takes a player's guess as an argument.
    Compares the guess with the secret number.
    Decrements attempts_remaining on a wrong guess.
    Sets game_over to true on a win or running out of attempts.
    Returns a message indicating if the guess was high, low, or correct.
3. Building the User Interface (Views):

    Create views for the game:
    index: The main page displaying game instructions and a form for the guess.
    result: The result page displayed after winning or losing.
    In the index view:
    Display the current number of attempts remaining.
    Use a form to capture the user's guess.
    Submit the form to a controller action that handles the guess.
    In the result view:
    Display a message indicating win or loss.
    If lost, reveal the secret number.
    If won, display the number of attempts taken.
    Offer a button or link to play again (restart the game).
4.  Handling User Input and Game Logic (Controller):

    Create a controller named GamesController (or GuessingGamesController).
    Define an action index to render the main game page (index view).
    Define an action check_guess to handle the submitted guess:
    Retrieve the guess from the form parameters.
    Create or retrieve a Game instance (session or database).
    Call the check_guess(guess) method on the Game instance.
    Based on the returned message (high, low, correct):
    Update the view with feedback for the user.
    If the game is over (win or lose), redirect to the result view.
    Otherwise, redirect back to the index view for another guess.
5. Implementing Reset Functionality:

    In the result view, provide a button or link to play again.
    In the controller's check_guess action, upon receiving a play again request:
    Create a new instance of Game or reset the existing one.
    Redirect back to the index view to start a new game.