import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
Scanner scan = new Scanner(System.in);
        System.out.println("Provide a String");
        String word = scan.nextLine();
        System.out.println("provide a sub part size");
        int size = scan.nextInt();
        scan.close();
        getSmallestAndLargest(word, size);



    }

    public static void getSmallestAndLargest(String s, int k){
        String smallest;
        String largest;
        String temp;


        ArrayList<String> collection = new ArrayList<>();

        for(int i = 0; i < s.length() - 3;i++){
            temp = s.substring(i,i+k);
            collection.add(temp);
        }

        for (String item: collection
             ) {
            System.out.println(item.toString());
        }

        for(int j = 0; j < collection.size() - 1; j++){
            if(collection.get(j).compareTo(collection.get(j + 1))> 0){
                swap(collection.get(j), collection.get(j + 1));
            }
        }

        smallest = collection.get(0);
        largest = collection.get(collection.size()-1);

        System.out.println("The Smallest char: " + smallest);
        System.out.println("The Largest char: " + largest);
    }

    public static void swap(String a, String b){
        String temp = a;
        a = b;
        b = temp;
    }
}
