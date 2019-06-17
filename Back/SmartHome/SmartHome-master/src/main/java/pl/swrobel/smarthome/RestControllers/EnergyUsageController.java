package pl.swrobel.smarthome.RestControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.swrobel.smarthome.Models.EnergyUsageListList;
import pl.swrobel.smarthome.Services.EnergyUsageService;


/**
 * Kontroler obsługujący EnergyUsage
 */
@Controller
@RequestMapping("/energy/")
public class EnergyUsageController {

    private final EnergyUsageService energyUsageService;

     /**
     * Metoda wstrzykująca obiekt klasy EnergyUsageService
     * @param energyUsageService obiekt klasy EnergyUsageService
     */
    @Autowired
    public EnergyUsageController(EnergyUsageService energyUsageService) {
        this.energyUsageService = energyUsageService;
    }

    /**
     * Metoda obsługująca żądanie HTTP "info"
     * @return opakowanie w którym znajduje się informacja o zużyciu energii oraz status HTTP
     */
    @GetMapping("info")
    public ResponseEntity<EnergyUsageListList> getEnergyUsageInfo() {


        return new ResponseEntity<>(energyUsageService.getEnergyUsage(), HttpStatus.OK);
    }
}
