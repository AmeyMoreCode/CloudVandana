

import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
       // String inputText = "The quick brown fox jumps over the lazy dog";
    	Scanner  sc = new Scanner(System.in);
        System.out.println("Enter the String to check pangram or not ");
        String inputText= sc.next();   
        if (isPangram(inputText)) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Create an array of boolean flags to represent the presence of letters
        boolean[] letterFlags = new boolean[26];

        // Convert the input string to lowercase to ignore case
        input = input.toLowerCase();

        // Iterate through the characters in the input string
        for (char c : input.toCharArray()) {
            // Check if the character is an alphabet letter
            if ('a' <= c && c <= 'z') {
                // Mark the corresponding letter as seen
                letterFlags[c - 'a'] = true;
            }
        }

        // Check if all 26 letters have been marked as seen
        for (boolean flag : letterFlags) {
            if (!flag) {
                return false; // If any letter is missing, it's not a pangram
            }
        }

        return true; // All letters are present, it's a pangram
    }
}
