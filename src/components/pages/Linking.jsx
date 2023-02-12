import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignupForm from './forms/SignupForm'
import BasicForm from './forms/BasicForm';
import Navbar from './Navbar';

const Linking = () => {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path = "/Signup" element= {<SignupForm/>}/>
                    <Route path = "/Login" element= {<BasicForm/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Linking

