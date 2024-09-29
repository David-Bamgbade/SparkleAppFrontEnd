package AddTwoNumbers.java;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AddTwoNumbersTest {

    @Test
    void addNumbers() {
        AddTwoNumbers numbers = new AddTwoNumbers();
        assertEquals(4, numbers.add(1, 3));
    }

    @Test
    void subtactNumbers() {
        AddTwoNumbers numbers = new AddTwoNumbers();
        assertEquals(-1, numbers.subtract(2, 3));
    }

    @Test
    void divideNumbers() {
        AddTwoNumbers numbers = new AddTwoNumbers();
        assertEquals(0.25, numbers.divide(1, 4));
    }
    @Test
    void multiplyNumbers(){
        AddTwoNumbers numbers = new AddTwoNumbers();
        assertEquals(3, numbers.product(1,3));
    }
    @Test
    void productNumbers() {
        AddTwoNumbers numbers = new AddTwoNumbers();
        assertEquals(25, numbers.product(5,5));
    }


}
  
