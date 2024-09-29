public class Palindrome {

    public static String palindrome(String palindrome){
            if(palindrome.charAt(0) == palindrome.charAt(4) && palindrome.charAt(1) == palindrome.charAt(3)){
                return "It is a palindrome";
            }
            return "It is not a palindrome";
    }

    public static void main(String[] args) {
        System.out.println(palindrome(""));
    }
}
