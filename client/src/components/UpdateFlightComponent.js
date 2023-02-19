
import axios from 'axios';
import React, {  useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import { Link, useNavigate} from 'react-router-dom';


const UpdateFlightComponent = () =>{

   const urlend = document.URL.split('/');
   const urlId = urlend[4];

   const navigate = useNavigate();

  const [data, setData] = useState({});
//   const [flightData, setFlightData] = useState({});

   const getFlightById = ()=>{
    axios.get(`http://localhost:8080/flights/${urlId}`).then(
        (response)=>{
            setData(response.data)
            console.log(data)
        },(error)=>{
            toast.error("!! Something went wrong!!")
        }
    )
   }
   
   useEffect(()=>{
    getFlightById()
   },[]);
   
   const handleForm = (param) =>{
      
      putData(data)
      param.preventDefault()
   }

   

    const putData = async (data) =>{
      try {
         const response = await axios.put('http://localhost:8080/flights' ,data)
         toast.info("Flight Updated Successful")
         console.log(response)
         window.location.reload(true);
      } catch (error) {
         toast.info('Failed');
         console.log(error)
      }
      
   }

   
   

   


   return(
      <div>
         <br /> <br />
         <div className= "container">
            <div className= "row">
            <div className= "card col-md-6 offset-md-3 offset-md-3">
               
               <div className= "card-body">
                  <form onSubmit={handleForm}>
                  <h2 className="text-center"> UPDATE FLIGHT</h2>
                     <div className= "form-group mb-2">
                     <label className= "form-label"> Flight Model</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Flight Model"
                        className= "form-control"
                        // value={flightData.model}
                        onChange = {(e) =>{
                           setData({...data,model:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label"> Flight Name</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Flight Name"
                        className= "form-control"
                        // value={flightData.name}
                        onChange = {(e) =>{
                           setData({...data,name:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label"> Source</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Source"
                        className= "form-control"
                        // value={flightData.source}
                        onChange = {(e) =>{
                           setData({...data,source:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label"> Destination</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Destination"
                        className= "form-control"
                        // value={flightData.destination}
                        onChange = {(e) =>{
                           setData({...data,destination:e.target.value})
                        }}

                        >
                        </input>

                     </div>
                     
                     <div className= "form-group mb-2">
                        <label className= "form-label">  Distance</label>
                        <input 
                        type= "number"
                        placeholder= "Enter Distance"
                        className= "form-control"
                        // value={flightData.distance}
                        onChange = {(e) =>{
                           setData({...data,distance:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Days</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Days"
                        className= "form-control"
                        // value={flightData.days}
                        onChange = {(e) =>{
                           setData({...data,days:e.target.value})
                        }}
                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Luggage</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Luggage"
                        className= "form-control"
                        // value={flightData.luggage}
                        onChange = {(e) =>{
                           setData({...data,luggage:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Departure</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Departure"
                        className= "form-control"
                        // value={flightData.departure}
                        onChange = {(e) =>{
                           setData({...data,departure:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Arrival</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Arrival"
                        className= "form-control"
                        // value={flightData.arrival}
                        onChange = {(e) =>{
                           setData({...data,arrival:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Duration</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Duration"
                        className= "form-control"
                        // value={flightData.duration}
                        onChange = {(e) =>{
                           setData({...data,duration:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "form-group mb-2">
                        <label className= "form-label">  Seats</label>
                        <input 
                        type= "number"
                        placeholder= "Enter Seats"
                        className= "form-control"
                        // value={flightData.seats}
                        onChange = {(e) =>{
                           setData({...data,seats:e.target.value})
                        }}
                        >
                        </input>

                     </div>

                     <button type="submit" className= "btn btn-success btn-lg">Submit</button>
                     <button type="reset" className="btn btn-warning btn-lg"> Clear</button>

                     <Link to ="/flights" className= "btn btn-danger btn-lg"> Exit</Link>

                  </form>


               </div>
            </div>
            </div>

         </div>
      </div>
   )

}

export default UpdateFlightComponent;
