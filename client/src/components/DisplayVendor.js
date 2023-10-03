import React, { useEffect, useState } from 'react'
import styles from '../styles/DisplayVendor.module.css'
import Table from 'react-bootstrap/Table';
import axios from "axios";
import VendorCard from './VendorCard';
import UpdateVendor from './UpdateVendor';
import Alert from 'react-bootstrap/Alert';

function DisplayVendor() {

  const [infoVendor,setInfoVendor]=useState([]);
  const [id,setId]=useState("");
  const [update,setUpdate]=useState(false);
  const [modal,setModal]=useState(false);
  const [page,setPage]=useState(1);
  // const [updatestatus]
  const increaseCount=()=>{
    setPage(page+1);
  }

  const decreaseCount=()=>{
    setPage(page-1);
  }


  useEffect(()=>{
    axios.get(`https://vendorserver-opsg.onrender.com/api/vendorapp/page/${page}`)
    .then((res)=>{
      console.log(res.data);
      //let active=res.data.length;
      console.log("Length:",res.data.length)
      setInfoVendor(res.data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[update,page]);

  const updateHandler=()=>{
    setUpdate(!update);
    console.log("Updated",update);
  }


  const editHandler =(e)=>{
    setId(e.target.name);
    setModal(true);
  }
  


  const closeHandler=()=>{
    setId("");
    setModal(false);
  }

  const deleteHandler = (e) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
    axios.delete(`https://vendorserver-opsg.onrender.com/api/vendorapp/${e.target.name}`);
    setInfoVendor((data) => {
      return data.filter((banking) => banking._id !== e.target.name);
    });
  }
  else{
    return;
  }
  };

 return(
  <>
        {modal ? (
          <div className={styles.close}>
          <p onClick={closeHandler}>⬅</p>
          <h2>Edit Vendor</h2>
          <UpdateVendor _id={id} closeHandler={closeHandler} updateHandler={updateHandler}/>
          </div>
        ):(
        <>
        {update?(<Alert variant="success" onClose={() => setUpdate(false)} dismissible>
        <Alert.Heading>Vendor Updated Successfully
        </Alert.Heading>
      </Alert>):("")}
        
        <Table striped bordered hover size="sm" responsive="sm" style={{  marginInline:'auto', marginTop:'5vh' }}>
        <thead>
          <tr>
          <th>S No.</th>
        <th>Name</th>
        <th>Bank Account No.</th>
        <th>Address</th>
        <th>City</th>
        <th>Country</th>
        <th>Edit</th>
        <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {infoVendor.map((vendorInfo,index)=>(
          
          <VendorCard key={index} sno={index+1} vendorInfos={vendorInfo} editHandler={editHandler} deleteHandler={deleteHandler}/>
        ))}
        </tbody>
      </Table>

      <div className={styles.pagination}>
      <button onClick={decreaseCount}>Back</button>
          <button onClick={increaseCount}>Next</button>
      </div>
  </>
      )}
  
  </>
 )
}

export default DisplayVendor