import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import SignupForm from './forms/SignupForm'
// import BasicForm from './forms/BasicForm';
import Navbar from './Navbar';
import MidPage from './MidPage';
import Otp from "./pages/Otp"
const Linking = () => {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/home' element={<MidPage/>} />
                    <Route path='/login' element={<Login />}/>
                    <Route path='/otp' element={<Otp/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Linking

