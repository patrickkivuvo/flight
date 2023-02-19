package com.computerscience.puea.flightbookingsystem.repository;

import com.computerscience.puea.flightbookingsystem.model.Flight;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FlightRepository extends MongoRepository<Flight,String> {
    List<Flight> findByDistance(int distance);
    List<Flight> findBySource(String source);
    List<Flight> findByDestination(String destination);
    List<Flight> findByDays(String days);
    List<Flight> findByLuggage(String luggage);
    List<Flight> findBySeats(int seats);
    List<Flight> findByDuration(String duration);
    List<Flight> findByDeparture(String departure);
    List<Flight> findByArrival(String arrival);
    @Query("{name: ?0 }")
    List<Flight> getFlightByName(String name);
    @Query("{model: ?0}")
    List<Flight> getFlightByModel(String model);
}
