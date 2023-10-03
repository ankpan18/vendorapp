import React from 'react';
import Button from 'react-bootstrap/Button';


const VendorCard = ({sno,vendorInfos,editHandler,deleteHandler}) => {
    const {_id,name,accno,address,city,country}=vendorInfos;
   
  return ( 
     
        <tr key={_id}>
          
        <td>{sno}</td>
        <td>{name}</td>
        <td>{accno}</td>
        <td>{address}</td>
        <td>{city}</td>
        <td>{country}</td>
        <td><Button variant="warning" name={_id} onClick={editHandler}>Edit</Button></td>
       <td> <Button variant="danger" name={_id} onClick={deleteHandler}>Delete</Button></td>
        </tr>

  )
}

export default VendorCard