package com.example.parkingApp.repository;

import com.example.parkingApp.entity.ParkingSpot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParkingSpotRepository extends JpaRepository<ParkingSpot, Long> {
    List<ParkingSpot> findByZoneIdAndOccupiedFalse(Long zoneId);
}