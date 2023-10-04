import React,{useState} from 'react';
import axios from 'axios';
import styles from '../styles/CreateVendor.module.css';
import Alert from 'react-bootstrap/Alert';
import { BASE_URL } from '../helper/helper';


const CreateVendor=()=> {
  const [vendorInfo,setVendorInfo]=useState({name:"",accno:"",address:"",city:"",country:""});
  const [show, setShow] = useState(false);
  const [success,setSuccess]=useState(false);
  function handleChange(e) {
    setVendorInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/vendorapp`,vendorInfo)
    .then((res)=>{
      setVendorInfo({name:"",accno:"",address:"",city:"",country:""});
      console.log(res.data.message);
      setSuccess(true);
    })
      .catch((err)=>{
        console.log("Unable to save Vendor Information");
        console.log(err.message);
        setShow(true);
      }); 
  }

  return (
    <div className={styles.maincont}>
      {show?(
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Technical Error
        </Alert.Heading>
        <p>
          Try entering the data correctly. Your account number might be associated with another vendor.
        </p>
      </Alert>) :("")}

      {
        success?(<Alert variant="success" onClose={() => setSuccess(false)} dismissible>
        <Alert.Heading>Vendor Saved Successfully
        </Alert.Heading>
      </Alert>):("")
      }
      <h2 className={styles.heading}>Create Vendor</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <label className={styles.label} htmlFor='name'>Vendor name</label>
        <input className={styles.input} type='text' name='name' id='name' value={vendorInfo.name} onChange={handleChange} placeholder='Vendor Name' required></input>
        <br/>
        <label className={styles.label} htmlFor='accno'>Account Number</label>
        <input className={styles.input} type='number' name='accno' id='accno' value={vendorInfo.accno} onChange={handleChange} placeholder='Account Number' required></input>
        <br/>
        <label className={styles.label} htmlFor='address'>Address</label>
        <input className={styles.input} type='text' name='address' id='address' value={vendorInfo.address} onChange={handleChange} placeholder='Address' required></input>
        <br/>
        <label className={styles.label}  htmlFor='city'>City</label>
        <input className={styles.input}  type='text' name='city' id='city' value={vendorInfo.city} onChange={handleChange} placeholder='City' required></input>
        <br/>
        <label className={styles.label} htmlFor='country'>Country</label>
        <input className={styles.input} type='text' name='country' id='country' value={vendorInfo.country} onChange={handleChange} placeholder='Country' required></input>
        <br/>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default CreateVendor