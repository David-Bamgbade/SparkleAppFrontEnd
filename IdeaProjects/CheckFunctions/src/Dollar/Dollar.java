package Dollar;

public class Dollar {

    public int add(int firstNumber, int secondNumber) {
        return firstNumber + secondNumber;
    }

    public int exception(int checkNumber, int num) {
        if(checkNumber > 0 ){
            throw new ArithmeticException("can not divide");
        }else{
            return checkNumber/ num;
        }

    }
}
