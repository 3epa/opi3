package web;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean

@RequestScoped
public class PointBean {
    private Point newPoint = new Point();

    public PointBean() {
    }

    public void addPoint() {
        newPoint.setResult(AreaChecker.hit(newPoint.getX(), newPoint.getY(), newPoint.getR()));
        DBManager.addPoint(newPoint);
        newPoint = new Point();
    }

    public Point getNewPoint() {
        return newPoint;
    }

    public void setNewPoint(Point newPoint) {
        this.newPoint = newPoint;
    }
}
