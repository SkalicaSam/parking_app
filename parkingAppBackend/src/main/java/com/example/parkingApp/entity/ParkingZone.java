package com.example.parkingApp.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "parking_zones")
public class ParkingZone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // NAMASTIE, OSTATNE

    @OneToMany(mappedBy = "zone")
    private List<ParkingSpot> parkingSpots;

    @OneToMany(mappedBy = "zone")
    private List<ParkingTariff> tariffs;



    // getters & setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ParkingSpot> getParkingSpots() {
        return parkingSpots;
    }

    public void setParkingSpots(List<ParkingSpot> parkingSpots) {
        this.parkingSpots = parkingSpots;
    }

    public List<ParkingTariff> getTariffs() {
        return tariffs;
    }

    public void setTariffs(List<ParkingTariff> tariffs) {
        this.tariffs = tariffs;
    }
}

