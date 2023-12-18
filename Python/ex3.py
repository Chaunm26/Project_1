import random
import colorama
from colorama import Fore, Style

# Initialize colorama for colored output
colorama.init(autoreset=True)

# List of vocabulary words
vocabulary_words = ["LEMON", "APPLE", "ORANGE", "BANANA", "GRAPE", "MANGO"]

def select_random_word():
    return random.choice(vocabulary_words)

def display_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += Fore.GREEN + letter + " "
        else:
            display += Fore.YELLOW + "_ "
    return display.strip()

def play_game():
    mystery_word = select_random_word().upper()
    attempts_left = 7
    guessed_letters = []
    
    print(Fore.BLUE + "Welcome to Word Mastermind!")
    print("Try to guess the mystery word.")
    
    while attempts_left > 0:
        print("\n" + Fore.CYAN + "Attempts left:", attempts_left)
        print(Fore.MAGENTA + "Word:", display_word(mystery_word, guessed_letters))
        
        guess = input("Guess a letter: ").strip().upper()
        
        if len(guess) != 1 or not guess.isalpha():
            print(Fore.RED + "Please enter a single letter.")
            continue
        
        if guess in guessed_letters:
            print(Fore.RED + "You've already guessed that letter.")
            continue
        
        guessed_letters.append(guess)
        
        if guess in mystery_word:
            print(Fore.GREEN + "Correct guess!")
        else:
            attempts_left -= 1
            print(Fore.RED + "Incorrect guess.")
        
        if all(letter in guessed_letters for letter in mystery_word):
            print("\n" + Fore.BLUE + "Congratulations! You guessed the word:", mystery_word)
            break
    
    if attempts_left == 0:
        print("\n" + Fore.BLUE + "You ran out of attempts. The mystery word was:", mystery_word)
    
    play_again = input(Fore.YELLOW + "Do you want to play again? (yes/no): ").strip().lower()
    if play_again == "yes":
        play_game()
    else:
        print(Fore.BLUE + "Thank you for playing Word Mastermind!")

if __name__ == "__main__":
    play_game()
