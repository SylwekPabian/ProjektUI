package pl.swrobel.smarthome.Models;

import java.util.ArrayList;

/**
 * Klasa definiująca obiekt, który przechowuje listę pokoi
 * @see Room
 */
public class RoomsList {

    private ArrayList<Room> rooms;

    /**
     * Konstruktor klasy RoomsList
     * @param rooms lista pokoi
     */
    public RoomsList(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }

    /**
     * Metoda zwracająca listę pokoi
     * @return lista pokoi
     */
    public ArrayList<Room> getRooms() {
        return rooms;
    }

    /**
     * Metoda ustawiająca liczbę pokoi
     * @param rooms lista pokoi
     */
    public void setRooms(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }
}
