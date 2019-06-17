package pl.swrobel.smarthome.RestControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.swrobel.smarthome.Models.Room;
import pl.swrobel.smarthome.Models.RoomsList;
import pl.swrobel.smarthome.Services.RoomService;

/**
 * Kontroler obsługijący RoomService
 */
@Controller
@RequestMapping("/room/")
public class RoomController {

    private final RoomService roomService;

    /**
     * Metoda wstrzykująca obiekt klasy RoomService
     * @param roomService obiekt klasy RoomService
     */
    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    /**
     * Metoda obsługująca żądanie HTTP "list"
     * @return opakowanie w którym znajduje się lista pokoi oraz status HTTP
     */
    @GetMapping("list")
    public ResponseEntity<RoomsList> getRoomsList() {

        return new ResponseEntity<>(roomService.getRoomsList(), HttpStatus.OK);
    }

    /**
     * Metoda obsługująca żądanie HTTP "list"
     * @param id id pokoju- parametr przekazany przez adres url do zmiennej
     * @return opakowanie w którym znajduje się informacja o pokoju oraz status HTTP
     */
    @GetMapping("info")
    public ResponseEntity<Room> getRoomInfo(@RequestParam(name = "id") int id) {

        return new ResponseEntity<>(roomService.getRoomInfo(id), HttpStatus.OK);
    }

    /**
     * Metoda obsługująca żądanie "changeproperties"
     * @param room danee przysyłane w ciele żądania
     * @return opakowanie w którym znajduje się zwracany tekst oraz status HTTP
     */
    @PostMapping("changeproperties")
    public ResponseEntity<String> setRoomProperites(@RequestBody Room room) {
        roomService.setRoomProperties(room);
        return new ResponseEntity<>("New properties were set to the room", HttpStatus.OK);
    }

}
