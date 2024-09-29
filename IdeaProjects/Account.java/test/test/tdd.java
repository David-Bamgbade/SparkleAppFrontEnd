public class AccountTest{

    public  void newAccountBalance_isZero{
        Account mfonAccount = new Account();

        int result = mfonAccount.checkBalance(pin);
        assertEquals(0, result);
    }

    //@Test
   // public void deposit2kTwice_balance4Test(){

   // }
    @Test
    public void depositNegativeAmountWhenBalanceIs2K_balanceIs2KTest(){
        Account mfonAccount = new Account();
        mfonAccount.deposit(2_000);
        assertEquals(2_000, mfonAccount.checkBalance("pin"));
        mfonAccount.deposit(-1_000);
        assertEquals(2_000, mfonAccount, checkBalance("pin"))
    }
    public void
}