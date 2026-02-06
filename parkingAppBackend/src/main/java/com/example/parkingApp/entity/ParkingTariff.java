package com.example.parkingApp.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "parking_tariffs")
public class ParkingTariff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TariffType type;

    @Column(nullable = false)
    private double pricePerHour;

    @ManyToOne
    @JoinColumn(name = "zone_id", nullable = false)
    private ParkingZone zone;

    // getters & setters
}
