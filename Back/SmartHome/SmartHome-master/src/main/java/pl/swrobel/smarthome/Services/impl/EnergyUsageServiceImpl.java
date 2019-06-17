package pl.swrobel.smarthome.Services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import pl.swrobel.smarthome.Models.EnergyUsage;
import pl.swrobel.smarthome.Models.EnergyUsageList;
import pl.swrobel.smarthome.Models.EnergyUsageListList;
import pl.swrobel.smarthome.Services.EnergyUsageService;

import java.util.ArrayList;

/**
 * Implementacja interfaceu EnergyUsageService
 */
@Service
public class EnergyUsageServiceImpl implements EnergyUsageService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    /**
     * Implementacja metody zwracającej obiekt klasy EnergyUsageListList
     * @return obiekt klasy EnergyUsageListList
     */
    @Override
    public EnergyUsageListList getEnergyUsage() {
        String query = "SELECT id, miesiac, delta, down, \"kWatts\", koszt FROM public.zuzycie_energii;";

        ArrayList<EnergyUsage> energyUsage = new ArrayList<>(jdbcTemplate.query(
                query,
                (rs, rowNum) -> new EnergyUsage(rs.getInt("id"), rs.getString("miesiac"), rs.getString("delta"), rs.getBoolean("down"), rs.getString("kWatts"), rs.getString("koszt"))
        ));
        EnergyUsageList energyUsageList = new EnergyUsageList("rok", energyUsage);
        return new EnergyUsageListList(energyUsageList);
    }
}
