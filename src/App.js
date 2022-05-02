import './App.css';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
function App() {
  const { register, handleSubmit } = useForm();
  const [Name, setName]=useState();
  const [LastName, setLastName]=useState();
  const [DOB, setDOB]=useState();
  const [Gender, setGender]=useState();
  const [moblieNo, setmoblieNo]=useState();
  const [FOI, setFOI]=useState(0);
  const [Nationality, setNationality]=useState();
  const [Address, setAddress]=useState();
  const onFormSubmit=(evt,event)=>{
    console.log(event.target);
    setName(evt.FirstName);
    setLastName(evt.LastName);
    setDOB(evt.Dob);
    setGender(evt.gender);
    setmoblieNo(evt.moblieNo);
    setFOI(evt.FieldOfInterest);
    setAddress(evt.address);
    setNationality(evt.nationality);
    console.log(evt.FieldOfInterest.length);
    event.target.name.value="";
    event.target.lname.value="";
    event.target.dob.value="";
    event.target.male.checked=false;
    event.target.female.checked=false;
    event.target.nation.value="";
    event.target.number.value="";
    event.target.address.value="";
    event.target.fullStack.checked=false;
    event.target.android.checked=false;
    event.target.AI.checked=false;
  }
  return (
    <div className="App">
        <div className="head"><h1>Personal Details</h1></div>
        <div className="container">
            
            
            <div className="subContainer">
                <h1>current</h1>
                <form id="form-1" onSubmit={handleSubmit(onFormSubmit)} >
                    <label htmlFor='name' >First Name : </label>
                    <input id="name" type="text" placeholder="Your Name" {...register("FirstName", { required: true, maxLength: 25 })} />
                    <label htmlFor="lname" >Last Name : </label>
                    <input id="lname" type="text" placeholder="Your father Name" {...register("LastName", { required: true, maxLength: 25 })}/>
                    <label htmlFor="dob">DOB  : </label>
                    <input id="dob" type="date" placeholder="Your Date of birth" {...register("Dob", { required: true })}/>
                    <div className="gender">
                        <label>Gender : </label>
                        <input id="male" defaultValue={"male"}  name="gender" type="radio" {...register("gender", { required: true })}/>
                        <label htmlFor="male">Male</label>
                        <input id="female" defaultValue="female" name="gender" type="radio" {...register("gender", { required: true })}/>
                        <label htmlFor="female" >Female</label>
                    </div>
                    <label htmlFor="nation">Nationality : </label>
                    <select id="nation" {...register("nationality", { required: true })}>
                        <option label='Select Country'/>
                        <option value={"india"}>india</option>
                        <option value={"USA"}>USA</option>
                    </select>
                    <label htmlFor="number">Phone Number : </label>
                    <input type="tel" id="number" placeholder="Enter your number" {...register("moblieNo", { required: true, maxLength: 10 })}/>
                    <label htmlFor="address">Address : </label>
                    <textarea id="address" placeholder="your address" {...register("address", { required: true, maxLength: 50})}></textarea>
                    <div className="interest">
                        <label>Field of Interest : </label>
                        <label><input id="fullStack" defaultValue="Full Stack Developer" type="checkbox" name="interest"{...register("FieldOfInterest")}/>Full Stack Developer</label>
                        <label><input id="android" defaultValue="Android Application Developer" type="checkbox" name="interest"{...register("FieldOfInterest")}/>Android Application Developer</label>
                        <label><input id="AI" defaultValue="Artificial Intelligence" type="checkbox" name="interest"{...register("FieldOfInterest")}/>Artificial Intelligence</label>
                    </div>
                    <br/>
                    <input id="sub" type="submit" />
                </form>
            </div>
            <div className="subContainer">
                <h1 >previous</h1>
                <div className='details' >
                  <h2>Name: {Name}</h2>
                  <h2>LastName: {LastName}</h2>
                  <h2>DOB: {DOB}</h2>
                  <h2>Gender: {Gender}</h2>
                  <h2>Nationality: {Nationality}</h2>
                  <h2>moblieNo: {moblieNo}</h2>
                  <h2>Address: {Address}</h2>
                  <h2>Field Of Interest: </h2>
                  <div className='fieldOfInterest'>
                    <h2>{FOI[0]}</h2>
                    <h2>{FOI[1]}</h2>
                    <h2>{FOI[2]}</h2>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
