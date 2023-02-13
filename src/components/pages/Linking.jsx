import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignupForm from './Sup'
import BasicForm from './login';
// import Navbar from './Navbar';
import Home from "./Home"
const Linking = () => {
    return(
        <>
            <Router>
                
                <Routes>

                    <Route path = "/" element= {<Home/>}/>
                    <Route path = "/Signup" element= {<SignupForm/>}/>
                    <Route path = "/Login" element= {<BasicForm/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Linking

