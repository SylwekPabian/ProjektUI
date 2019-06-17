package pl.swrobel.smarthome.Services;

import pl.swrobel.smarthome.Models.EnergyUsageListList;

/**
 * Klasa interfacu EnergyUsageService która zawiera następujące metody:
 */
public interface EnergyUsageService {

    /**
     * Metoda zwracająca obiekt klasy EnergyUsageListList
     * @return obiekt klasy EnergyUsageListList
     */
    EnergyUsageListList getEnergyUsage();
}
