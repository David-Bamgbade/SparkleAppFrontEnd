import java.util.Arrays;

public class TaskOne{

    public static void main(String... args) {
        sortArrays();
    }
        public static void sortArrays() {
            int[] arrays = {
                    12, 34, 56, 32, 1, 99, 56, 20, 10, 40
            };
            int temp = 0;
            for (int index = 0; index < arrays.length; index++) {
                for (int indexTwo = 0; indexTwo < arrays.length; index++) {
                    temp = arrays[index];
                    arrays[index] = arrays[indexTwo];
                    arrays[indexTwo] = temp;
                    System.out.println(Arrays.toString(arrays));
                }

            }
        }

    }
