
import axios from    "axios"

const listCategories = async () =>{
    const config = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM5OTIzNDQsImV4cCI6MTY2NDAxMDM0NH0.zvKnNeFmS1syt8-PiHjOsfQ20Sk77gMRSW7FnSJgGtE"
        }
    }
    //return axios({ method: 'get', url: "categories", headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM5OTIzNDQsImV4cCI6MTY2NDAxMDM0NH0.zvKnNeFmS1syt8-PiHjOsfQ20Sk77gMRSW7FnSJgGtE' } })
    return await axios.get("categories");
}

const getCategoryById = async (id) =>{
    return await axios.get("categories/:id");
}

export const categoryService = { listCategories, getCategoryById}
