package pl.swrobel.smarthome.Services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import pl.swrobel.smarthome.Models.Room;
import pl.swrobel.smarthome.Models.RoomsList;
import pl.swrobel.smarthome.Services.RoomService;

import java.util.ArrayList;

/**
 * Implementacja interfaceu RoomService
 */
@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    /**
     * Implementacja metody zwracającej obiekt klasy RoomsList
     * @return obiekt klasy RoomsList
     */
    @Override
    public RoomsList getRoomsList() {
        String query = "SELECT id_pokoju, nazwa_pokoju, temperatura, \"wilgotność\", czy_ogrzewanie_on, czy_nawilżacz_on FROM public.pokoj;";

        ArrayList<Room> rooms = new ArrayList<>(jdbcTemplate.query(
                query,
                (rs, rowNum) -> new Room(rs.getInt("id_pokoju"), rs.getString("nazwa_pokoju"), rs.getString("temperatura"), rs.getString("wilgotność"), rs.getBoolean("czy_ogrzewanie_on"), rs.getBoolean("czy_nawilżacz_on"))
        ));
        return new RoomsList(rooms);
    }

    /**
     * Implementacja metody zwracającej obiekt klasy Room
     * @param roomId id pokoju
     * @return obiekt klasy Room
     */
    @Override
    public Room getRoomInfo(int roomId) {
        ArrayList<Room> rooms = getRoomsList().getRooms();
        for (Room room : rooms) {
            if (room.getId() == roomId) {
                return room;
            }
        }

        return null;
    }

    /**
     * Implementacja metody ustawiająca właściwości pokoju
     * @param room obiekt klasy Room
     */
    @Override
    public void setRoomProperties(Room room) {
        String query = "UPDATE public.pokoj SET nazwa_pokoju = " + room.getName() + ", czy_ogrzewanie_on = " + room.isHeatingOn() +
                ", czy_nawilżacz_on = " + room.isHumidifierOn() + ", temperatura = " + room.getTemperature() +
                ", wilgotność = " + room.getHumidity() + " WHERE id_pokoju = " + room.getId();

        jdbcTemplate.execute(query);
    }

}
