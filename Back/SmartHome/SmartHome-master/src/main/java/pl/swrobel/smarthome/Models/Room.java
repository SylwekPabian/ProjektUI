package pl.swrobel.smarthome.Models;

/**
 * Klasa definiująca obiekt Room
 */
public class Room {
    private int id;
    private String name;
    private String temperature;
    private String humidity;
    private boolean isHeatingOn;
    private boolean isHumidifierOn;

    /**
     * Konstruktor klasy Room
     * @param id id pokoju
     * @param name nazwa pokoju
     * @param temperature temperatura
     * @param humidity wilgotność
     * @param isHeatingOn czy włączone ogrzewanie
     * @param isHumidifierOn czy włączony nawilżacz
     */
    public Room(int id, String name, String temperature, String humidity, boolean isHeatingOn, boolean isHumidifierOn) {
        this.id = id;
        this.name = name;
        this.temperature = temperature;
        this.humidity = humidity;
        this.isHeatingOn = isHeatingOn;
        this.isHumidifierOn = isHumidifierOn;
    }

    /**
     * Metoda zwracająca id pokoju
     * @return id pokoju
     */
    public int getId() {
        return id;
    }

    /**
     * Metoda ustawiająca id pokoju
     * @param id id pokoju
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Metoda zwracająca nazwę pokoju
     * @return nazwa pokoju
     */
    public String getName() {
        return name;
    }

    /**
     * Metoda ustawiająca nazwę pokoju
     * @param name nazwa pokoju
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Metoda zwracająca temperature
     * @return temperatura
     */
    public String getTemperature() {
        return temperature;
    }

    /**
     * Metoda ustawiająca temperature
     * @param temperature temperatura
     */
    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    /**
     * Metoda zwracająca wilgotność
     * @return wilgotność
     */
    public String getHumidity() {
        return humidity;
    }

    /**
     * Metoda ustawiająca wilgotność
     * @param humidity wilgotność
     */
    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    /**
     * Metoda zwracająca czy włączone jest ogrzewanie
     * @return <code>true</code> włączone; <code>false</code> wyłączone
     */
    public boolean isHeatingOn() {
        return isHeatingOn;
    }

    /**
     * Metoda ustawiająca włączenie/wyłączenie ogrzewania
     * @param heatingOn <code>true</code> włączone; <code>false</code> wyłączone
     */
    public void setHeatingOn(boolean heatingOn) {
        isHeatingOn = heatingOn;
    }

    /**
     * Metoda zwracająca czy włączony jest nawilżacz
     * @return <code>true</code> włączony; <code>false</code> wyłączony
     */
    public boolean isHumidifierOn() {
        return isHumidifierOn;
    }

    /**
     * Metoda ustawiająca włączenie/wyłączenie nawilżacza
     * @param humidifierOn <code>true</code> włączony; <code>false</code> wyłączony
     */
    public void setHumidifierOn(boolean humidifierOn) {
        isHumidifierOn = humidifierOn;
    }
}
