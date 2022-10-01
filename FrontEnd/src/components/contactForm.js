import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import authHeader from "../services/auth-header";

export default function ContactForm() {
    const params = useParams()
    const nav = useNavigate()
    const [message, setMessage] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMessage(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        console.log('message', message)
        setMessage({...message, user: {id: 1}, property: {id: params.id}})
        event.preventDefault();
        await axios.post("/messages", message, authHeader()).then(res => {
            alert("Success. Thank you")
            nav('/')
        })
            .catch(error => {
                console.log('An error has occurred.: ', error)
            })
        console.log(JSON.stringify(message));
    }
    return (
        <div>

            <h3>Contact Form</h3>

            <div className="container ">
                <form>
                    <label htmlFor="fname">Full Name </label>
                    <input type="text" onChange={handleChange} id="fname" name="senderName" placeholder="Your name.."/>
                    <br/>
                    <label htmlFor="email">Email </label>
                    <input type="text" onChange={handleChange} id="email" name="senderEmail"
                           placeholder="Your  email.."/>
                    <br/>
                    <label htmlFor="phone">Phone </label>
                    <input type="text" id="phone" onChange={handleChange} name="senderPhone"
                           placeholder="Your phone.."/>
                    <br/>


                    <label htmlFor="message">Subject </label>
                    <textarea id="subject" name="message" onChange={handleChange} placeholder="Write something.."
                              style={{height: "200px"}}></textarea>
                    <br/>

                    <input type="submit" onClick={handleSubmit} className="btn btn-success" value="Send"/>
                </form>
            </div>
        </div>
    )
}
