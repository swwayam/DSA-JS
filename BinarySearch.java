
class BinarySearch {

    public static int binary(int[] arr, int n, int low, int high) {
        int mid = (low + high) / 2;

        if (high >= low) {
            if (arr[mid] == n) {
                System.out.println("Element is present");
                return mid;
            }

            if (arr[mid] > n) {
                return binary(arr, n, low, mid - 1);
            } else {
                return binary(arr, n, mid + 1, high);
            }
        }

        return -1;

    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        int n = 5;
        int low = 0;
        int high = arr.length - 1;

        binary(arr, n, low, high);
    }

}
