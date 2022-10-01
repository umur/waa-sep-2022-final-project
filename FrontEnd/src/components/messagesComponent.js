import axios from "axios";
import * as React from "react";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FaSearch} from "react-icons/fa";


export default function MessagesComponent() {
    const params = useParams()
    const initialMessages = [
        {
            id:1,
            senderName: "Umur Inan ",
            senderEmail: "umur.inan@miu.edu",
            senderPhone: "sender phone",
            message: "Message body"
        }
    ]
    const [messages, setMessages] = useState(initialMessages);

    const fetchMessages = async () => {
        await axios.get('/messages/user/'+params.id)
            .then((result) => {
                console.log(result.data)
                setMessages(result.data);
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>.');
            })

    }

    useEffect(() => {
        fetchMessages();
    }, [])

    const rowStyle = {border: "1px green solid", padding: '5px', borderRadius: '5px'};
    return (
        <div className="container">
            <div>
                <Link to='/messages/new'>New Message </Link>
            </div>
            <div className="border-1 ">
                <input type="text" className="col-md-6" style={rowStyle} placeholder={'search messages'}/>
                <span className="btn-success" style={rowStyle}> <FaSearch/> </span>

            </div>
            <h2> Recent Messages </h2>

            <div className="container">
                <div className="d-flex ">
                    {
                        messages.map((m) =>
                            <div key={m.id} > {m.id} <Link to={"/messages/"+m.id}>{m.senderName} : {m.senderEmail}</Link>  </div>)
                    }
                </div>
            </div>
        </div>

    )
}
