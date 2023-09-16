import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }
  

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-5 w-[100vw]">
   <form onSubmit={submitHandler} className="w-[40%]">

    <label htmlFor="firstName">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Love"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />

         <br/>
    <label htmlFor="lastName">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Babbar"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />

    <br/>
    <label htmlFor="email">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="love@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />
        <br/>
    <label htmlFor="country">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline w-full mb-3"
      >

      <option>Bangladesh</option>
      <option>United States</option>
      <option>Canada</option>
      <option>England</option>
    </select>

    <br/>
    <label htmlFor="streetAddress">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />
        <br/>
    <label htmlFor="city">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="B-25C"
      value={formData.city}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />

  <br/>
    <label htmlFor="state">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />

        <br/>
    <label htmlFor="postalCode">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline w-full mb-3"
    />

    <br/>
    <br/>
    <fieldset>
      <legend>By Email</legend>

      <div className="flex">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
      />

          <div>
        <label htmlFor="comments">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>

          
