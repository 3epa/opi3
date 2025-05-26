package web;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AreaCheckerTest {

    @Test
    public void testHitInRectangle() {
        assertTrue(AreaChecker.hit(1, 1, 3));
        assertTrue(AreaChecker.hit(0.5, 0.5, 1));
        assertTrue(AreaChecker.hit(0, 0, 2));
    }

    @Test
    public void testHitInTriangle() {
        assertTrue(AreaChecker.hit(-1, -0.5, 2));
        assertTrue(AreaChecker.hit(-2, -1, 4));
        assertTrue(AreaChecker.hit(0, 0, 2));
    }

    @Test
    public void testHitInCircle() {
        assertTrue(AreaChecker.hit(-1, 1, 4));
        assertTrue(AreaChecker.hit(-0.5, 0.5, 2));
        assertTrue(AreaChecker.hit(0, 0, 2));
    }

    @Test
    public void testMissAllAreas() {
        assertFalse(AreaChecker.hit(-2, 2, 1));
        assertFalse(AreaChecker.hit(2, -2, 1));
        assertFalse(AreaChecker.hit(2, 2, 1));
    }
}