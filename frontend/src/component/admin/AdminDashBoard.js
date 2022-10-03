import React from 'react';
import Badge from 'react-bootstrap/Badge';
import AdminDashBoardCustomers from './AdminDashBoardCustomers';
import AdminDashboardProperties from './AdminDashBoardProperties';
import AdminGraph from './AdminGraph';
export default function AdminDashBoard(){
    return(
        <div className="dashboard--pro">


            <hr />
            <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Number of Customers and Registered Properties in Chart:</h3>
            <hr />
            <AdminGraph /> 
            <hr />
            <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Last 10 Properties Rented:</h3>
            <hr />
            <AdminDashboardProperties />
            <hr />
            <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Last 10 Recent Registered Customers:</h3>
            <hr />
            <AdminDashBoardCustomers />
            
        </div>
    )
}