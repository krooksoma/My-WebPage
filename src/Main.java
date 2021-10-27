import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        BigInteger a = new BigInteger(reader.readLine());
        BigInteger b = new BigInteger(reader.readLine());

        BigInteger c = a.add(b);
        BigInteger d = a.multiply(b);

        reader.close();

        System.out.println(c);
        System.out.println(d);

    }
}
