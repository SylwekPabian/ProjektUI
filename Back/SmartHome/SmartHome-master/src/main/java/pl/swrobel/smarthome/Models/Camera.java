package pl.swrobel.smarthome.Models;

/**
 * Klasa definiująca obiekt kamera
 */

public class Camera {
    private int id;
    private String name;
    private String link;

    /**
     * Konstruktor klasy Camera
     * @param id - id kamery
     * @param name - nazwa kamery
     * @param link - link do kamery
     */

    public Camera(int id, String name, String link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }

    /**
     * Metoda zwracająca id kamery.
     * @return id kamery
     */
    public int getId() {
        return id;
    }

    /**
     * Metoda ustawiająca id kamery
     * @param id id dodawanej kamery
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Metoda zwracająca nazwę kamery
     * @return nazwa kamery
     */
    public String getName() {
        return name;
    }

    /**
     * Metoda ustawiająca nazwę nowej kamery
     * @param name nazwa dodawanej kamery
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Metoda zwracająca link do kamery
     * @return link do kamery
     */
    public String getLink() {
        return link;
    }

    /**
     * Metoda ustawiająca link do nowej kamery
     * @param link link do nowej kamery
     */
    public void setLink(String link) {
        this.link = link;
    }
}
