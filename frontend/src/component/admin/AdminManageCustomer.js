import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import {deleteCustomer, fetchAllCustomer} from "../../store/customerSlicer";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

function AdminManageCustomer() {

  const {customers,status} = useSelector((state) => state.customer);


  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllCustomer());

  }, [dispatch]);



  const deleteCustomerById = (index) => {
    const idx = customers[index].id; 
    dispatch(deleteCustomer(idx));
    }


  return (
    <div>
      <h3 dir="ltr">Manage Customers</h3>
      <hr />
        <Table responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Customer Contact</th>
          </tr>
        </thead>
        <tbody>

           {
                customers.map((item,i) =>(
                   <tr key={i}>
                                       {
                      <td>{i+1}</td>
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
                      <td><Button variant="danger" onClick={()=>deleteCustomerById(i)}>Delete Customer</Button>{' '}</td>
                    }
                    
                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminManageCustomer;