import './App.css';
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {Footer, Header, Home, Login, PageNotFound} from "./components";
import Profile from "./components/profile.component";
import CategoryRoutes from "./routes/categoryRoutes";
import PropertyRoutes from "./routes/propertyRoutes";
import axios from "axios";
import User from "./components/user.component";
import AdminRoutes from "./routes/adminRoutes";
import Register from "./components/signUpSimple";
import RegisterComponent from "./components/registerComponent";
import CreatePropertyComponent from "./components/createPropertyComponent";
import ContactForm from "./components/contactForm";
import MessagesComponent from "./components/messagesComponent";

function App() {
    axios.defaults.baseURL = "http://localhost:8080/"
    if (!!localStorage.getItem('user'))
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('user').accessToken
   /* else
    {
        let user = {
            id: 1,
            userName: "owner1",
            email: "owner1@pmp.com",
            tokenType: "Bearer",
            accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvd25lcjEiLCJpYXQiOjE2NjQ1NDU1NTksImV4cCI6MTY2NDYyMTg1OX0.ZBxB1vLS_Vt1N8AEApNrEPxsn3NIn3jJiGTtvhbk2G_dxKjjU6j3wyOPrqyvcgBjaXID-1AF7qj19vRXi0mYYg"
        }
        localStorage.setItem('use', JSON.stringify(user))
    }*/
    const isLoggedIn = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            if (decodedJwt.exp * 1000 < Date.now()) {
                // logout
                localStorage.removeItem('user')
                // nav('/login')
                return false
            }
        }
        return false
    }

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };
    return (
        <div className="App " >
            <BrowserRouter>
                <div className="mt-3 container-fluid text-center">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/user" element={<User/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/contact" element={<ContactForm/>}/>
                        <Route path="/contact/*" element={<ContactForm/>}/>
                        <Route path="/categories/*" element={<CategoryRoutes/>}/>
                        <Route path="/properties/*" element={<PropertyRoutes/>}/>
                        <Route path="/messages/user/:" element={<MessagesComponent/>}/>
                        <Route path="/messages/:id" element={<MessagesComponent/>}/>
                        <Route path="/admin/*" element={<AdminRoutes/>}/>
                        <Route path="/signup/*" element={<Register/>}/>
                        <Route path="/register/*" element={<RegisterComponent/>}/>
                        <Route element={<PageNotFound/>}/>

                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
