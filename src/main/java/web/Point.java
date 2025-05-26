package web;

import jakarta.persistence.*;

@Entity
@Table(name = "points")
public class Point {

    public Point() {
    }

    public Point(Long id, double x, double y, double r, boolean result) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private double x;
    @Column(nullable = false)
    private double y;
    @Column(nullable = false)
    private double r;
    @Column(nullable = false)
    private boolean result;

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }
}
