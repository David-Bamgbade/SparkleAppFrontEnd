//package phoneBookApp;
//import java.util.Scanner;
//import java.util.ArrayList;
//public class Main {
//    private static ArrayList<String[]> contacts = new ArrayList<String[]>();
//    public static void  goToMain(){
//
//        String prompt = """
//
//            1 -> Add Contacts
//            2 -> Remove contact
//            3 -> Find contacts by first name
//            4 -> Find contacts by last name
//            5 -> Find contact by phone number
//            6 -> Edit Contact
//            0 -> Exit
//            """;
//        System.out.println(prompt);
//        char options = input().charAt(0);
//        switch(options){
//            case 1:
//                addPhoneNumber();
//            case 2:
//                removeNumber();
//            case 3:
//                findContactByFirstName();
//        }
//    }
//
//    private static void findContactByFirstName(){
//
//
//    }
//
//    private static void removeNumber() {
//    }
//
//    private static void addPhoneNumber() {
//        String firstNmame = input("Enter your first name");
//        String secondNumber = input("Enter your last name");
//        String phoneNumber = input("Enter  your phone number");
//    }
//
//    public static String input(String name){
//    Scanner input = new Scanner(System.in);
//    System.out.println(name);
//    return input.next();
//
//    }
//
//
//}
