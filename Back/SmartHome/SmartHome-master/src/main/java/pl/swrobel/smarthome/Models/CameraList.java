package pl.swrobel.smarthome.Models;

import java.util.ArrayList;

/**
 * Klasa definiująca obiekt przechowujący listę kamer
 * @see Camera
 */
public class CameraList {
    ArrayList<Camera> cameras = new ArrayList<>();

    /**
     * Konstruktor klasy CameraList
     * @param cameras lista kamer
     */
    public CameraList(ArrayList<Camera> cameras) {
        this.cameras = cameras;
    }

    /**
     * Metoda zwracająca listę kamer
     * @return lista kamer
     */
    public ArrayList<Camera> getCameras() {
        return cameras;
    }

    /**
     * Metoda ustawiające listę kamer
     * @param cameras lista kamer
     */
    public void setCameras(ArrayList<Camera> cameras) {
        this.cameras = cameras;
    }
}
