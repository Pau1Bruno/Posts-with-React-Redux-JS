import {BrowserRouter} from "react-router-dom";
import Navbar from "./router/Navbar";
import AppRouter from "./router/AppRouter";
import './styles/App.css';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
