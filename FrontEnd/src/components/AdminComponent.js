import * as React from "react";
import {useEffect, useState} from "react";
import {categoryService} from "../services/categoriesService"
import {userService} from "../services/user.service";
import SimpleUser from "./simpleUser";
import PropertyCard from "./propertyCard";

export default function AdminComponent() {

    const initialCategories = [
        {
            id: 1,
            name: "Home",
            parent_id: 0
        },
        {
            id: 2,
            name: "Office",
            parent_id: 0
        },
    ]
    const initialUsers = [
        {
            id:0,
            firstName: 'test',
            lastName: 'test',
            email: 'test',
            password: '',
            address: {}

        }
    ]
    const [users, setUsers] = useState(initialUsers);
    const [categories, setCategories] = useState(initialCategories);

    const fetchUsers = async () => {
        await userService.getAllUsers()
            .then(response => {
                    setUsers(response.data);
                    console.log('Fetching users: ', response.data)
                }
            ).catch(error => console.log('Error fetching users: ', error))

    }
    const fetchCategories = async () => {
        await categoryService.listCategories()
            .then(response => {
                    setCategories(response.data);
                    console.log('Fetching categories: ', categories)
                }
            ).catch(error => console.log('Error fetching categories: ', error))
    }
    useEffect(() => {
        fetchUsers();
        fetchCategories()

    }, [])

    return (
        <div className="row container ">

            <div className="col-md-7 shadow border-1 m-1">
                <h3 className={'text-success'}>Featured Customers</h3>
                {
                    users.map((u) =>
                        <SimpleUser key={u.id}  {...u} />
                    )}
            </div>
            <div className="col-md-3 shadow border-1 m-1">
                <strong className="text-success"> Top 10  Featured Properties *****</strong>
                {
                    categories.map((c) =>
                        <PropertyCard key={c.id}  {...c} />

                    )}

            </div>
        </div>

    )
}
