import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignupForm from './Signup'
import BasicForm from './login';
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

