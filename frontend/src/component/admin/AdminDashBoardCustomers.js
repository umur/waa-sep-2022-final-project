import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "./../../store/customerSlicer";
import React, { useEffect } from "react";

function AdminDashBoardCustomers() {

  const {customers, status} = useSelector((state) => state.customer);

  console.log(customers);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllCustomer());

  }, []);

  return (
    <div>
        <Table responsive="sm">
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
  
                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminDashBoardCustomers;