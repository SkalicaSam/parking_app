package com.example.parkingApp.repository;

import com.example.parkingApp.entity.ParkingTariff;
import com.example.parkingApp.entity.TariffType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ParkingTariffRepository extends JpaRepository<ParkingTariff, Long> {
    Optional<ParkingTariff> findByZoneIdAndType(Long zoneId, TariffType type);
}