import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Scanner;

public class Main {


    public static void main(String[] args) {
        int month=1;
        int day=15;
        int year=2015;

        LocalDate time = LocalDate.of(year, month, day);

        String DayValue = String.valueOf(time.getDayOfWeek());

        System.out.println(DayValue);

    }

}
