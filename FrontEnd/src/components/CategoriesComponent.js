import * as React from "react";
import {useEffect, useState} from "react";
import {categoryService} from "../services/categoriesService"
export default function Categories() {

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
    const [categories, setCategories] = useState(initialCategories);

    const [catName, setCatName] = useState("");

    function  addCategory () {
        categories.push({id: 0, name: catName, parent_id: 0})
        setCategories(categories)
    }
    function  handleCategoryChange (e) {
        console.log('selected cat: ', e.target.value)
    }
    const fetchCategories = async () => {
        await categoryService.listCategories()
            .then(response => {
                setCategories(response.data);
                console.log('Fetching categories: ', categories)
                }
            ).catch(error => console.log('Error fetching categories: ', error))

    }
    useEffect( () => {
        fetchCategories()
    }, [])

    return (
        <div>Filter by Category
            <select className="dropdown" onChange={handleCategoryChange}>
                {
                    categories?.map( (p) =>
                        <option key={p.id} className="dropdown-item">{p.name}</option>)
                }
            </select>
            <input type="text" name="category" value={catName}
                   onChange={(e) => setCatName(e.target.value)}/>
            <input type="button" name="addBtn" value="Add"
                   onClick={() => {
                       addCategory();
                   }
            }/>
        </div>

    )
}
