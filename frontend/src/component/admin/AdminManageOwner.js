import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import {deleteOwner, fetchAllOwner} from "../../store/ownerSlicer";

function AdminManageOwner() {

  const propertyState = useSelector((state) => state.owner);
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(fetchAllOwner());

  }, [])


  const deleteOwnerById = (id) => {
    dispatch(deleteOwner(id));
  }


  return (
    <div>
      <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Manage Owners</h3>
      <hr />
        <Table responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Owner Name</th>
            <th>Owner Email</th>
            <th>Owner Address</th>
            <th>Owner Contact</th>
          </tr>
        </thead>
        <tbody>

           {
               propertyState.owners.map((item,i) =>(
                   <tr key={i}>
                                       {
                      <td>{item.id}</td>
                    }
                    {
                      <td>{item.name}</td>
                    }
                                        {
                      <td>{item.email}</td>
                    }
                                        {
                      <td>{item.contact}</td>
                    }
                                        {
                      <td>{item.address}</td>
                    }
                     {
                      <td><Button variant="danger" onClick={()=>deleteOwnerById(item.id)}>Delete Owner</Button>{' '}</td>
                    }

                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminManageOwner;
