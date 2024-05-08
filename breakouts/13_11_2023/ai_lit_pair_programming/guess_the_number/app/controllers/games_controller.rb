class GamesController < ApplicationController

    def generate_secret_number
    # Generate a random integer within the desired range (1-100)
        rand(1..100)
    end

    def index
        @messages = {heading: "Guess the number game", }

        #Initialize game session values
        session[:secret_number] = generate_secret_number unless session.has_key? :secret_number
        session[:attempts] = 5 unless session.has_key? :attempts
        session[:score] = 0 unless session.has_key? :score

        # Check if a new game is starting
        if params.has_key? :new_game
            session[:secret_number] = generate_secret_number
            session[:attempts] = 5
            session[:score] = 0
        end

        # Check if the player has made a guess
        guess = nil
        if params.has_key? :guess
            guess = params[:guess].to_i
        end

        if session[:attempts] > 0 
            if guess
                match_won = guess == session[:secret_number]
                if match_won
                    session[:score] += 1
                    session[:secret_number] = generate_secret_number

                    @messages[:alert] = "Congratulations! You guessed (#{guess}) correctly! A new random number has been created!"
                else
                    session[:attempts] -= 1

                    hint = "too high" if guess > session[:secret_number]
                    hint = "too low" if guess < session[:secret_number]

                    @messages[:alert] = "Oops! #{guess} is #{hint}. You have #{session[:attempts]} attempts left."
                end
            end
        end

        if session[:attempts] <= 0
            @messages[:heading] = "Game Over! Thanks for playing! The last random number was: #{session[:secret_number]}"
            @messages[:alert] = "Please use the \"New Game\" button to start a new game."
        end

        @messages[:score] = session[:score]
        @messages[:attempts] = session[:attempts]
        @messages[:alert] =  nil unless @messages.has_key? :alert
    end

end