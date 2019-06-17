package pl.swrobel.smarthome.Models;

/**
 * Klasa definiujaća obiekt EnergyUsage. Jest to jeden rekord, jednego miesiąca przechowujący informacje o zużyciu energii
 */
public class EnergyUsage {
    private int id;
    private String month;
    private String delta;
    private boolean down;
    private String kWatts;
    private String cost;

    /**
     * Konstruktor klasy EnergyUsage
     * @param id id zużycia energii
     * @param month nazwa miesiąca z którego pochodzą wartości
     * @param delta różnica w zużyciu energii
     * @param down czy spadło, czy wzrosło zużycie energii
     * @param kWatts zużycie energi w kilowatach
     * @param cost koszt energii
     */
    public EnergyUsage(int id, String month, String delta, boolean down, String kWatts, String cost) {
        this.id = id;
        this.month = month;
        this.delta = delta;
        this.down = down;
        this.kWatts = kWatts;
        this.cost = cost;
    }

    /**
     * Metoda zwracająca id zużycia energii
     * @return id zużycia energii
     */
    public int getId() {
        return id;
    }

    /**
     * Metoda ustawiająca id zużycia energii
     * @param id zużycia energii
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Metoda zwracająca miesiąc
     * @return miesiąc
     */
    public String getMonth() {
        return month;
    }

    /**
     * Metoda ustawiająca miesiąc
     * @param month miesiąc
     */
    public void setMonth(String month) {
        this.month = month;
    }

    /**
     * Metoda zwracająca różnicę zużycia energii
     * @return różnica zużycia
     */
    public String getDelta() {
        return delta;
    }

    /**
     * Metoda ustawiająca różnicę zużycia energii
     * @param delta różnica zużycia
     */
    public void setDelta(String delta) {
        this.delta = delta;
    }

    /**
     * Metoda zwraca czy zwiększyło się czy zmniejszyło zużycie
     * @return <code>true</code> jeśli się zmniejszyło
     *         <code>falce</code> jeśli się nie zmniejszyło
     */
    public boolean getDown() {
        return down;
    }

    /**
     * Metoda ustawia czy zwiększyło się czy zmniejszyło zużycie
     * @param down <code>true</code> jeśli się zmniejszyło
     *             <code>falce</code> jeśli się nie zmniejszyło
     */
    public void setDown(boolean down) {
        this.down = down;
    }

    /**
     * Metoda zwraca ile kiloWat zużyto
     * @return kiloWaty
     */
    public String getkWatts() {
        return kWatts;
    }

    /**
     * Metoda ustawia ile zużyto kiloWatów
     * @param kWatts kiloWaty
     */
    public void setkWatts(String kWatts) {
        this.kWatts = kWatts;
    }

    /**
     * Metoda zwracająca koszt energii
     * @return koszt energii
     */
    public String getCost() {
        return cost;
    }

    /**
     * Metoda ustawiająca koszt energii
     * @param koszt koszt energii
     */
    public void setCost(String koszt) {
        this.cost = koszt;
    }

}
