package web;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Persistence;

import java.util.ArrayList;
import java.util.List;

public class DBManager {
    private static EntityManager entityManager = Persistence.createEntityManagerFactory("default").createEntityManager();

    public static void addPoint(Point point) {
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static List<Point> getPoints() {
        try {
            entityManager.getTransaction().begin();
            ArrayList<Point> points = (ArrayList<Point>) entityManager.createQuery("SELECT p FROM Point p", Point.class).getResultList();
            entityManager.getTransaction().commit();
            return points;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<Point>();
    }
}
