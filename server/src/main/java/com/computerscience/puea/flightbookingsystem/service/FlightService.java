package com.computerscience.puea.flightbookingsystem.service;

import com.computerscience.puea.flightbookingsystem.model.Flight;
import com.computerscience.puea.flightbookingsystem.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FlightService {

    @Autowired
    private FlightRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE

    public Flight save(Flight flight){

        flight.setFlightId(UUID.randomUUID().toString().split("-")[0]);

       return repository.save(flight);
    }
    public List<Flight> findAllFlights(){
        return repository.findAll();
    }
    public Flight getFlightByFlightId(String flightId){
        return repository.findById(flightId).get();
    }
    public List<Flight> getFlightByModel(String model){
        return repository.getFlightByModel(model);
    }
    public List<Flight> getFlightByName(String name){
        return repository.getFlightByName(name);
    }
    public List<Flight> getFlightBySource(String source){
        return repository.findBySource(source);
    }
    public List<Flight> getFlightByDestination(String destination){
        return repository.findByDestination(destination);
    }
    public List<Flight> getFlightByDistance(int distance){
        return repository.findByDistance(distance);
    }

    public List<Flight> getFlightByDays(String days){
        return repository.findByDays(days);
    }
    public List<Flight> getFlightByLuggage(String luggage){
        return repository.findByLuggage(luggage);
    }
    public List<Flight> getFlightByDeparture(String departure){
        return repository.findByDeparture(departure);
    }

    public List<Flight> getFlightByArrival(String arrival){
        return repository.findByArrival(arrival);
    }
    public List<Flight> getFlightByDuration(String duration){
        return repository.findByDuration(duration);
    }

    public List<Flight> getFlightBySeats(int seats){
        return repository.findBySeats(seats);
    }


    public Flight updateFlight(Flight flightRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document
        Flight existingFlight = repository.findById(flightRequest.getFlightId()).get();
        existingFlight.setModel(flightRequest.getModel());
        existingFlight.setName(flightRequest.getName());
        existingFlight.setSource(flightRequest.getSource());
        existingFlight.setDestination(flightRequest.getDestination());
        existingFlight.setDistance(flightRequest.getDistance());
        existingFlight.setDays(flightRequest.getDays());
        existingFlight.setLuggage(flightRequest.getLuggage());
        existingFlight.setDeparture(flightRequest.getDeparture());
        existingFlight.setDuration(flightRequest.getDuration());
        existingFlight.setArrival(flightRequest.getArrival());
        existingFlight.setSeats(flightRequest.getSeats());
        return repository.save(existingFlight);
    }
    public String deleteFlight(String flightId){
        repository.deleteById(flightId);
        return flightId + "flight deleted from dashboard";
    }


    public Flight deleteById(String id) {

        return null;
    }
}
