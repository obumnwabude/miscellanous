/**
 * "T" Name Counter in my hard-coded name
 */
public class Name1 {
  public static void main(String[] args) {
    // variable holding name;
    String name = "T-Obum-t";
    // Character Array for name
    // use lowercase to ensure proper equality
    char[] nameChars = name.toLowerCase().toCharArray();
    // variable holding number of T in name
    int numOfTs = 0;
    
    // fancy welcome message
    System.out.println("\"T\" Counter in My Name");
    System.out.println("========================");
    System.out.println("");
    System.out.println("My name is " + name + " and ... ");
   
    // loop through character array of name and save Ts
    for (int i = 0; i < nameChars.length; i++) {
      if (nameChars[i] == 't') {
        numOfTs++;
      }
    }

    // print out the number of Ts
    System.out.println("There are " + numOfTs + " \"T\"s in my name: "
      + name + ".");
  }
}
