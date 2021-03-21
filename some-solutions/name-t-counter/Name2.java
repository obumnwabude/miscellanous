import java.util.Scanner;

/**
 * "T" Name Counter in name taken from user's input
 */
public class Name2 {
  public static void main(String[] args) {
    // fancy welcome message
    System.out.println("Welcome to Name \"T\" Counter");
    System.out.println("========================");
    System.out.println("");
    System.out.println("Please kindly enter your name:");
    
    // Scanner for getting name from user
    Scanner in = new Scanner(System.in);
    // variable holding name;
    String name = in.nextLine();
    // Character Array for name
    // use lowercase to ensure proper equality
    char[] nameChars = name.toLowerCase().toCharArray();
    // variable holding number of T in name
    int numOfTs = 0;
   
    // loop through character array of name and save Ts
    for (int i = 0; i < nameChars.length; i++) {
      if (nameChars[i] == 't') {
        numOfTs++;
      }
    }

    // print out the number of Ts
    System.out.println("There "
      + (numOfTs == 1 ? "is " : "are ") + numOfTs + " \"T\""
      + (numOfTs == 1 ? " " : "s ") + "in your name."
    );
  }
}
