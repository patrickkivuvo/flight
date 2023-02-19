package com.computerscience.puea.flightbookingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection =  "flight")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Flight {
    @Id
    private String flightId;
    private String model;
    private String name;
    private String source;
    private String destination;
    private int distance;
    private String days;
    private String luggage;
    private String departure;
    private String arrival;
    private String duration;

    private int seats;

    public Flight(Map<String, Object> data) {
    }
}
