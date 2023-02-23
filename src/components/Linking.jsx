import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import SignupForm from './forms/SignupForm'
// import login from './forms/login';
import Login from './forms/Login'
// import Navbar from './Navbar';
import MidPage from './MidPage';

const Linking = () => {
    return(
        <>
            <Router>
                {/* <Navbar/> */}
                <Routes>
                    <Route path='/home' element={<MidPage/>} />
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Linking

