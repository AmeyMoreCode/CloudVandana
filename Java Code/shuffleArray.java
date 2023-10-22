

import java.util.Random;

public class shuffleArray {
	public static void main(String[] args) {
		//Array given 
		int [] arr = {1,2,3,4,5,6,7};
		
		shuffleArray(arr);
		
		System.out.println("shuffled Array: ");
		//to print the output
		for (int i : arr) {
			System.out.print(i+" ");
		}
		
		
 	}
    // create a function to shuffle numbers
	public static void shuffleArray(int[] arr) {
		int n = arr.length;
		Random rand = new Random();//to generate random Number
		
		for(int i = n-1; i > 0; i--) { // loop
			int j = rand.nextInt(i); // To take a random number
			
			//Swapping the number
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		
	}

}
