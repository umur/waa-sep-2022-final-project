
import axios from    "axios"
import authHeader from "./auth-header";

const listCategories = async () =>{
    return await axios.get("categories", authHeader());
}

const getCategoryById = async (id) =>{
    return await axios.get("categories/:id");
}

export const categoryService = { listCategories, getCategoryById}
