package pl.swrobel.smarthome.Services;

import pl.swrobel.smarthome.Models.Room;
import pl.swrobel.smarthome.Models.RoomsList;

/**
 * Klasa interfacu RoomService która zawiera następujące metody:
 */
public interface RoomService {

    /**
     * Metoda zwracająca listę pokoi
     * @return lista pokoi
     */
    RoomsList getRoomsList();

    /**
     * Metoda zwracająca informacje o pokoju
     * @param roomId id pokoju
     * @return obiekt klasy Room
     */
    Room getRoomInfo(int roomId);

    /**
     * Metoda ustawiająca właściwości pokoju
     * @param room obiekt klasy Room
     */
    void setRoomProperties(Room room);
}
