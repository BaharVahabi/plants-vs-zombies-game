import java.util.Scanner;

public class WarshallAlgorithm {

    // تابع اجرای الگوریتم وارشال
    public static void warshall(int[][] graph, int n) {
        int[][] closure = new int[n][n];

        // کپی کردن ماتریس اولیه به ماتریس بستار
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                closure[i][j] = graph[i][j];
            }
        }

        // الگوریتم وارشال
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    closure[i][j] = (closure[i][j] != 0 || (closure[i][k] != 0 && closure[k][j] != 0)) ? 1 : 0;
                }
            }
        }

        // چاپ نتیجه
        System.out.println("ماتریس بستار ترانزیتیو:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(closure[i][j] + " ");
            }
            System.out.println();
        }
    }

    // تابع اصلی برنامه
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("تعداد رئوس گراف را وارد کنید: ");
        int n = scanner.nextInt();

        int[][] graph = new int[n][n];

        System.out.println("ماتریس مجاورت را وارد کنید:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                graph[i][j] = scanner.nextInt();
            }
        }

        warshall(graph, n);
    }
}