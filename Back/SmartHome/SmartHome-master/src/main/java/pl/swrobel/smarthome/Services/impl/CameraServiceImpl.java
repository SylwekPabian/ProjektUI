package pl.swrobel.smarthome.Services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import pl.swrobel.smarthome.Models.Camera;
import pl.swrobel.smarthome.Models.CameraList;
import pl.swrobel.smarthome.Services.CameraService;

import java.util.ArrayList;

/**
 * Implementacja interfaceu CameraService
 */
@Service
public class CameraServiceImpl implements CameraService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    /**
     * Implementacja metody zwracającej obiekt klasy kamera
     * @param cameraId id kamery
     * @return <code>null</code> jeśli nie ma takiej kamery w bazie danych; <code>obiekt klasy Camera</code> jeśli jest w bazie danych dany obiekt Camera
     */
    @Override
    public Camera getCamera(int cameraId) {
        ArrayList<Camera> cameras = getCameras().getCameras();
        for (Camera camera : cameras) {
            if (camera.getId() == cameraId) {
                return camera;
            }
        }
        return null;
    }

    /**
     * Implementacja metody zwracającej obiekt klasy CameraList
     * @return obiekt klasy CameraList
     */
    @Override
    public CameraList getCameras() {
        String query = "SELECT id_kamery, nazwa_kamery, link FROM public.kamery;";

        ArrayList<Camera> cameras = new ArrayList<>(jdbcTemplate.query(
                query,
                (rs, rowNum) -> new Camera(rs.getInt("id_kamery"), rs.getString("nazwa_kamery"), rs.getString("link"))
        ));
        return new CameraList(cameras);
    }

}
