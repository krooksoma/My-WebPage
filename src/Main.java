import jdk.swing.interop.SwingInterOpUtils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.rmi.NotBoundException;
import java.text.NumberFormat;
import java.util.*;

public class Main {

        public static void main(String[] args) throws IOException{
//            get user input
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("provide string to check for palindrome");
//            reads value from input and assign it to a variable
            String stringOne = reader.readLine();
            String stringTwo = reader.readLine();
            reader.close();

//            anagram



        }

        public static boolean checkAnagram(String one, String two){
            int sum = 0;

//            check strings length first(1st constraint)
            if(one.length() != two.length()){
                return false;
            }
//            convert both to lowercase(constraint 2)
            two = two.toLowerCase();
            one = one.toLowerCase();

//            loop through each character on the alphabet
            for(int c = 'a'; c <='z'; c++){
//             loop through each string
                for(int i = 0; i < one.length(); i++){
//                    string one
                    if(one.charAt(i) == c){
                        sum ++;
                    }
//                    string two
                    if(two.charAt(i) == c){
                        sum--;
                    }
                }
//                if the sum does not end up as zero it means the string are not anagrams
                if(sum != 0){
                    return false;
                }
            }
            return true;
        }
}

