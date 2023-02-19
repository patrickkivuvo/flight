package com.computerscience.puea.flightbookingsystem.controller;

import com.computerscience.puea.flightbookingsystem.model.Flight;
import com.computerscience.puea.flightbookingsystem.repository.FlightRepository;
import com.computerscience.puea.flightbookingsystem.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/flights")
public class FlightController {
    private final FlightRepository flightRepository;
    public FlightController(FlightRepository flightRepository){
        this.flightRepository= flightRepository;
    }
    @Autowired
    private FlightService service;
    @GetMapping
    public List<Flight> getFlights(){
        return service.findAllFlights();
    }

   @PostMapping("/data")
    public void createFlight(@RequestBody Flight flight) {
       Flight savedFlight = service.save(flight);
   }
    @GetMapping("/{flightId}")
    public Flight getFlight(@PathVariable String flightId){
        return service.getFlightByFlightId(flightId);
    }

    @GetMapping("/model/{model}")
    public List<Flight> findFlightUsingModel(@PathVariable String model) {
        return service.getFlightByModel(model);
    }
    @GetMapping("/name/{name}")
    public List<Flight> findFlightUsingName(@PathVariable String name){
        return service.getFlightByName(name);
    }
    @GetMapping("/source/{source}")
    public List <Flight> findFlightUsingSource(@PathVariable String source){
        return service.getFlightBySource(source);
    }
    @GetMapping("/destination/{destination}")
    public List<Flight> findFlightUsingDestination(@PathVariable String destination) {
        return service.getFlightByDestination(destination);
    }
    @GetMapping("/distance/{distance}")
    public List<Flight> findFlightUsingDistance(@PathVariable int distance){
        return service.getFlightByDistance(distance);
    }
    @GetMapping("/days/{days}")
    public List<Flight> findFlightUsingDays(@PathVariable String days){
        return service.getFlightByDays(days);
    }
    @GetMapping("/luggage/{luggage}")
    public List<Flight> findFlightUsingLuggage(@PathVariable String luggage){
        return service.getFlightByLuggage(luggage);
    }

    @GetMapping("/departure/{departure}")
    public List<Flight> findFlightUsingDeparture(@PathVariable String departure){
        return service.getFlightByDeparture(departure);
    }
    @GetMapping("/arrival/{arrival}")
    public List<Flight> findFlightUsingArrival(@PathVariable String arrival){
        return service.getFlightByArrival(arrival);
    }
    @GetMapping("/duration/{duration}")
    public List<Flight> findFlightUsingDuration(@PathVariable String duration){
        return service.getFlightByDuration(duration);
    }

    @GetMapping("/seats/{seats}")
    public List<Flight> findFlightUsingSeats(@PathVariable int seats){
        return service.getFlightBySeats(seats);
    }
    @PutMapping
    public Flight modifyFlight(@RequestBody Flight flight){
        return service.updateFlight(flight);
    }

//    public void updateFlight(@RequestMapping Flight flight){
//        flightService.saveOrUpdate(flight);
//    }

    @DeleteMapping("/{flightId}")
    public String deleteFlight(@PathVariable String flightId){
        return service.deleteFlight(flightId);
    }

}
