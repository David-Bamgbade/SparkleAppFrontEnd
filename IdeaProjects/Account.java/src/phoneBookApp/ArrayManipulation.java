package phoneBookApp;

import java.util.Arrays;

public class ArrayManipulation {

    private static String[] contactNumber = new String[1];
    public static void main(String[] args) {

        //saveNumber("09146767474");
       // saveNumber("08047646747");
        //saveNumber("07076446464");
        //System.out.println(Arrays.toString(contactNumber));
    }
    public static void saveNumber(String number){
        checkArray(contactNumber);
        contactNumber[contactNumber.length-1] = number;
    }
    public static void checkArray(String[] contact){
        if(contactNumber[contactNumber.length-1] != null){
            String[] newContact = new String[contactNumber.length+1];
            for(int index = 0; index < contactNumber.length; index++){
                newContact[index] = contactNumber[index];
            }
            contactNumber = newContact;
        }
    }
    }



