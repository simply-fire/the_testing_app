import './AdminDashboard.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {

    const navigate = useNavigate();
    return (
        <div className="pgClassic">
            <div className="btnCont">
                <button className='but1' onClick={() => navigate('/ExamCreator')}>
                    Create a test
                </button>
            </div>
        </div >
    )
}

export default AdminDashboard