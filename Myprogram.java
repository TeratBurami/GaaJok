import java.util.Scanner;

public class Myprogram{


	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		boolean status = true;
		do{
			
			System.out.println("Please select number 1-3 to run the program, or press 0 to quit:");
			int number = in.nextInt();			
			
			if(number == 1) {
				System.out.println("Please insert number to the program and press 0 to to calculate the Max, Min, and Average value:");
				// TODO: Task 1: Write a program to enter the numbers until pressing 0 to stop, 
				//then the program should calculate and display the largest (Max), smallest (Min), and Average numbers entered.
				int input = in.nextInt();
				int max = input, min = input, count = 0;
				double average = input;
				
				while(input!=0) {
					average += (input = in.nextInt()); count++;
					if(input==0) break;
					if(input>max) max = input;
					if(input<min) min = input;
				} System.out.println("Max=" + max + "\nMin=" + min);
				
				if(count!=0) System.out.println("Average=" + average/count);
				
			}else if(number == 2) {
				System.out.println("Please insert any number as a high of the triangle:");
				// TODO: Task 2: Write a program to print the following triangle where height h is given by user.
				int num = in.nextInt();
				
				for(int i=0;i<num;i++) {
					for(int j=num-i-1;j>0;j--) System.out.print(" ");
					for(int j=0;j<2*i + 1;j++) System.out.print(i);
					System.out.println();
				} 
					
			}else if(number ==3) {
				// TODO: Task 3: Write a program to print the following Roman 3 number.	
				for(int i=0;i<3;i++) System.out.print("  ***  ");
				System.out.println();
				for(int i=0;i<5;i++) System.out.println("   *      *      *");
				for(int i=0;i<3;i++) System.out.print("  ***  ");
				System.out.println();
				
			}else {
				if(number == 0) status=false;
				else System.out.println("invalid number");
			}
			
		}while(status);
		in.close();
	}

}
