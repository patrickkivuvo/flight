
import axios from 'axios';
import React, {  useState} from 'react'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


const AddFlightComponent = () =>{
  const [data, setData] = useState({})
   
   
   const handleForm = (param) =>{
      postData(data)
      param.preventDefault()
   }

   

    const postData = async (data) =>{
      try {
         const response = await axios.post('http://localhost:8080/flights/data' ,data)
         toast.info("Flight Added")
         console.log(response)
         window.location.reload(true)
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
                  <h2 className="text-center"> ADD FLIGHT</h2>
                     <div className= "form-group mb-2">
                     <label className= "form-label"> Flight Model</label>
                        <input 
                        type= "text"
                        placeholder= "Enter Flight Model"
                        className= "form-control"
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
                        onChange = {(e) =>{
                           setData({...data,seats:e.target.value})
                        }}
                        >
                        </input>

                     </div>

                     <button type="submit" className= "btn btn-success btn-lg" >Submit</button>
                     <button type="reset" className="btn btn-warning btn-lg" style = {{marginLeft:"10px"}}> Clear</button>

                     <Link to ="/flights" className= "btn btn-danger btn-lg" style = {{marginLeft:"10px"}}> Exit</Link>

                  </form>


               </div>
            </div>
            </div>

         </div>
      </div>
   )

}

export default AddFlightComponent;
