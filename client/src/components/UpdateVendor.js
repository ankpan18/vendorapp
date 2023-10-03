import React,{useEffect, useState} from 'react';
import axios from "axios";
import styles from '../styles/CreateVendor.module.css';
import { useNavigate } from 'react-router-dom';

const UpdateVendor = ({_id,closeHandler,updateHandler}) => {
  const [vendorInfo,setVendorInfo]=useState({name:"",accno:"",address:"",city:"",country:""});
  const [loading, setLoading] = useState(true); // add a loading state
  const navigate=useNavigate();

  const handleChange =(e)=>{
    setVendorInfo((data)=>({...data,[e.target.name]: e.target.value}));
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    axios.put(`https://vendorserver-opsg.onrender.com/api/vendorapp/${_id}`,vendorInfo)
      .then((res)=>{
        
        setVendorInfo({name:"",accno:"",address:"",city:"",country:""});
        console.log("submitHandler called");
        updateHandler();
        navigate('/');
      })
      .catch((err)=>{
        console.error(err);
      });
  };

  useEffect(()=>{
    axios.get(`https://vendorserver-opsg.onrender.com/api/vendorapp/${_id}`)
      .then((res)=>{
        console.log(res.data);
        setVendorInfo(res.data.vendor);
        setLoading(false); // set loading to false after data is fetched
      })
      .catch((err)=>{
        console.log(err.message);
      });
  },[_id]);

  return (
    <div className={styles.maincont}>
      {loading ? ( // check if loading is true
        <p>Loading...</p> // render a loading message
      ) : ( // else
        <form className={styles.form} onSubmit={(e)=>{submitHandler(e);closeHandler(); }}>
          <label className={styles.label} htmlFor='name'>Vendor name</label>
          <input className={styles.input} type='text' name='name' id='name' value={vendorInfo.name} onChange={handleChange} required></input>
          <br/>
          <label className={styles.label} htmlFor='accno'>Account Number</label>
          <input className={styles.input} type='number' name='accno' id='accno' value={vendorInfo.accno} onChange={handleChange} required></input>
          <br/>
          <label className={styles.label} htmlFor='address'>Address</label>
          <input className={styles.input} type='text' name='address' id='address' value={vendorInfo.address} onChange={handleChange} required></input>
          <br/>
          <label className={styles.label} htmlFor='city'>City</label>
          <input className={styles.input} type='text' name='city' id='city' value={vendorInfo.city} onChange={handleChange} required></input>
          <br/>
          <label className={styles.label} htmlFor='country'>Country</label>
          <input className={styles.input} type='text' name='country' id='country' value={vendorInfo.country} onChange={handleChange} required></input>
          <br/>
          <button className={styles.button}>Update</button>
        </form>
      )}
    </div>
  )
}

export default UpdateVendor;
