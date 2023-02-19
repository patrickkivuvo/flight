import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom';

<><Link to={"/add-flight"}> ADD FLIGHT </Link><Link to={"/edit-flight/:id"}> UPDATE FLIGHT </Link></>

const   ListFlightComponent = () => {
  const [flights, setFlights] = useState([])

  const navigate = useNavigate()

   useEffect(()=> {
    getAllFlightsFromServer();
   }, [])
    const getAllFlightsFromServer = ()=>{
      axios.get('http://localhost:8080/flights').then((response)=>{
        console.log(response)
        setFlights(response.data)
        toast.success("All Flights loaded from Server !!")
      },
      (error)=>{
        toast.error("All Flights loaded from Server !!")
      }

      )
    }
    const deleteFlight = (flightId) =>{
      axios.delete(`http://localhost:8080/flights/${flightId}`).then((response)=>{
        console.info("!! Flight deleted successfuly !!")
        window.location.reload(true)
      },
      (error)=>{
        toast.error("!! Something went wrong on Server!!")
      })
    }
    
   

          
  return (
    <div className= "container">
      <h2 className= "text-center"> List Flights</h2>
      <Link to = '/add-flight' className = "btn btn-primary mb-2" > ADD FLIGHT</Link>
      <table className= "table table-bordered table-striped">
        <thead>
          <th> Flight Id</th>
          <th> Flight Model</th>
          <th> Flight Name</th>
          <th> Source</th>
          <th> Destination</th>
          <th> Distance</th>
          <th> Days</th>
          <th> Luggage</th>
          <th> Departure</th>
          <th> Arrival</th>
          <th> Duration</th>
          <th> Seats</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            flights.map(
              flight =>
              <tr key= {flight.flightId}>
                    <td> {flight.flightId}</td>
                    <td> {flight.model}</td>
                    <td> {flight.name}</td>
                    <td> {flight.source}</td>
                    <td> {flight.destination}</td>
                    <td> {flight.distance}</td>
                    <td> {flight.days}</td>
                    <td> {flight.luggage}</td>
                    <td> {flight.departure}</td>
                    <td> {flight.arrival}</td>
                    <td> {flight.duration}</td>
                    <td> {flight.seats}</td>
                    <td>
                    
                      <Link className="btn btn-info" to={{pathname:`/edit-flight/${flight.flightId}`}}> Update</Link></td>
                     <td>
                      {/* <button className = "btn btn-danger" onClick={() => {deleteFlight(flight.flightId)}} style = {{marginLeft:"10px"}}> Delete</button></td> */}
                      <button className = "btn btn-danger" onClick={() => deleteFlight(flight.flightId)} style = {{marginLeft:"10px"}}> Delete</button></td> 
                      
                    
                   
                    
              </tr>
            )
          }
        </tbody>

      </table>
     
    </div>
  )
}

export default ListFlightComponent;
