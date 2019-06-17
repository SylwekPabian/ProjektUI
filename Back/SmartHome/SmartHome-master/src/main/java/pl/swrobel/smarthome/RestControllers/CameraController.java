package pl.swrobel.smarthome.RestControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.swrobel.smarthome.Models.Camera;
import pl.swrobel.smarthome.Models.CameraList;
import pl.swrobel.smarthome.Services.CameraService;

/**
 * Kontroler obsługujący kamery
 */
@Controller
@RequestMapping("/camera/")
public class CameraController {

    private final CameraService cameraService;

    /**
     * Metoda wstrzykująca obiekt klasy CameraService
     * @param cameraService obiekt klasy CameraService
     */
    @Autowired
    public CameraController(CameraService cameraService) {
        this.cameraService = cameraService;
    }

    /**
     * Metoda obsługująca żądanie HTTP "getCamera"
     * @param id id kamery - parametr przekazany przez adres url do zmiennej
     * @return opakowanie w ktorym znajduje się id kamery oraz status HTTP
     */
    @GetMapping("getCamera")
    public ResponseEntity<Camera> getCamera(@RequestParam(name = "id") int id) {

        return new ResponseEntity<>(cameraService.getCamera(id), HttpStatus.OK);
    }

    /**
     * Metoda obsługująca żądanie HTTP "getCamerasList"
     * @return opakowanie w ktorym znajduje się lista kamer oraz status HTTP
     */
    @GetMapping("getCamerasList")
    public ResponseEntity<CameraList> getCameras() {

        return new ResponseEntity<>(cameraService.getCameras(), HttpStatus.OK);
    }

}
