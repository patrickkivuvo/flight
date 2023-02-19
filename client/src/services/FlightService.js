import axios from 'axios';

const FLIGHT_BASE_REST_API_URL ='http://localhost:8080/flights';

class FlightService{
    getFlights(){
        return axios.get(FLIGHT_BASE_REST_API_URL)
    }

    createFlight(flight){
        return axios.post(FLIGHT_BASE_REST_API_URL, flight)
    }
    
    updateFlight(flightid){
        return axios.put(FLIGHT_BASE_REST_API_URL, flightid)
    }
    deleteFlight(flightId){
        return axios.delete(FLIGHT_BASE_REST_API_URL + '/' + flightId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  new FlightService(); 

