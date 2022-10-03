import "./App.css";
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Routes from "./component/Routes";
import {UserManger} from "./component/auth/config";

function App() {
    axios.defaults.baseURL = "http://localhost:8080/api/";
    const router = createBrowserRouter(Routes);
    UserManger.events.addUserLoaded((user) => {
        axios.defaults.headers.common['Authorization'] = user.access_token;
    })
    return (
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={router}/>
            </div>
        </Provider>
    );
}

export default App;
