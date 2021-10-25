import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        String myString = " This is my very long string";
        String[] newArray = myString.split(" ");

        for(String a: newArray){
            System.out.println(a);
        }
    }

}
