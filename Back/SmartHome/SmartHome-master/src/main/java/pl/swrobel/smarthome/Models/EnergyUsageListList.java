package pl.swrobel.smarthome.Models;

/**
 * Klasa definiująca obiekt EnergyUsageListList. Szablon NGX wymagał Listy obiektów z jednego roku
 * @see EnergyUsage
 * @see EnergyUsageList
 */
public class EnergyUsageListList {

    private EnergyUsageList energyUsageList;

    /**
     * Konstruktor klasy EnergyUsageListList
     * @param energyUsageList lista zużyć energii
     */
    public EnergyUsageListList(EnergyUsageList energyUsageList) {
        this.energyUsageList = energyUsageList;
    }

    /**
     * Metoda zwracająca listę obiektów EnergyUsageList
     * @return obiekt EnergyUsageList
     */
    public EnergyUsageList getEnergyUsageList() {
        return energyUsageList;
    }

    /**
     * Metoda ustawiająca listę obiektów EnergyUsageList
     * @param energyUsageList obiekt EnergyUsageList
     */
    public void setEnergyUsageList(EnergyUsageList energyUsageList) {
        this.energyUsageList = energyUsageList;
    }
}
