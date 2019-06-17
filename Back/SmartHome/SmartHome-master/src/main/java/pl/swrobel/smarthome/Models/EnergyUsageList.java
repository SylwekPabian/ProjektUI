package pl.swrobel.smarthome.Models;

import java.util.ArrayList;

/**
 * Klasa definiująca obiekt, który przechowuje listę ze zużyciem energii
 * @see EnergyUsage
 */
public class EnergyUsageList {

    private String title;
    private ArrayList<EnergyUsage> energyUsages = new ArrayList<>();

    /**
     * Konstruktor klasy EnergyUsageList
     * @param title zmienna przechowująca rok
     * @param energyUsages lista predstawiającą zestawienie zużycia energii
     */
    public EnergyUsageList(String title, ArrayList<EnergyUsage> energyUsages) {
        this.title = title;
        this.energyUsages = energyUsages;
    }

    /**
     * Metoda zwracająca listę predstawiającą zestawienie zużycia energii
     * @return lista zużyć energii
     */
    public ArrayList<EnergyUsage> getEnergyUsages() {
        return energyUsages;
    }

    /**
     * Metoda ustawiająca listę predstawiającą zestawienie zużycia energii
     * @param energyUsages lista zużyć energii
     */
    public void setEnergyUsages(ArrayList<EnergyUsage> energyUsages) {
        this.energyUsages = energyUsages;
    }

    /**
     * Metoda zwracająca rok
     * @return rok
     */
    public String getTitle() {
        return title;
    }

    /**
     * Metoda ustawiająca rok
     * @param title rok
     */
    public void setTitle(String title) {
        this.title = title;
    }
}
