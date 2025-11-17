class TowerOfHanoi {

    public static void tower(int n, char src, char destination, char auxillory){
        if(n > 0){
            tower(n-1, src, auxillory, destination);
            System.out.println("Move " + n +  " disk from " + src + " to " + destination);
            tower(n - 1, auxillory, destination, src);
        }
    }


    public  static void main(String args[]){
        tower(3, 'A', 'B', 'C');
    }   
}