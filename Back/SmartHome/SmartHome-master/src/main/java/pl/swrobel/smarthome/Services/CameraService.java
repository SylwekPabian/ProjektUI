package pl.swrobel.smarthome.Services;

import pl.swrobel.smarthome.Models.Camera;
import pl.swrobel.smarthome.Models.CameraList;

/**
 * Klasa interfacu CameraService która zawiera następujące metody:
 */
public interface CameraService {

    /**
     * Metoda zwracająca kamerę
     * @param cameraId id kamery
     * @return kamerę
     */
    Camera getCamera(int cameraId);

    /**
     * Metoda zwracająca listę kamer
     * @return lista kamer
     */
    CameraList getCameras();
}
