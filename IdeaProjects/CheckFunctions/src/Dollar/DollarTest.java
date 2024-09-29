package Dollar;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DollarTest {

    @Test
    void checkForExpectedValue(){
    Dollar myDollar = new Dollar();
    assertEquals(4, myDollar.add(2,2));
    }
    @Test
    void verifyForSpecificException(){
        Dollar myDollar = new Dollar();
        int result = myDollar.exception(45,5);

        //assertEquals(true,myDollar.exceptions(45, 4));
    }
}