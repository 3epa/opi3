package web;

public class AreaChecker {
    public static boolean hit(double x, double y, double r) {
        return inRectangle(x, y, r) || inTriangle(x, y, r) || inCircle(x, y, r);
    }

    private static boolean inRectangle(double x, double y, double r) {
        return (0 <= x && x <= r) && (0 <= y && y <= r);
    }
    private static boolean inTriangle(double x, double y, double r) {
        return (((double) -1 / 2*x-r/2 <= y && y <= 0) && (x <= 0));
    }
    private static boolean inCircle(double x, double y, double r) {
        return (x*x + y*y <= r/2*r/2) && (x <= 0) && (y >= 0);
    }
}
