package web;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@ApplicationScoped
public class TableBean {
    private List<Point> points = new ArrayList<>();
    public TableBean(List<Point> points) {}
    public List<Point> getPoints() {
        points = DBManager.getPoints();
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }
}
