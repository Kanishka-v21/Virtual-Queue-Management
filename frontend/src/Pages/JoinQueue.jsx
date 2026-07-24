import{ useNavigate } from "react-router-dom";
import { useState } from "react";
import "./JoinQueue.css";

export default function JoinQueue() {
    const [showPopup, setShowPopup]  = useState(false);
    const [branch, setBranch] = useState("");
    const [service, setService] = useState("");
    const navigate = useNavigate();
    const handleJoinQueue = () =>{
        if(!branch || !service) {
            alert("Please Select both branch and service.");
            return;
        }
        setShowPopup(true);

        navigate("/dashboard");
    };

    return(
        <div className="join-container">
            <div className = "join-card">
                <h1> Join a Queue</h1>
                <p>Select your preferred branch and service to receive a virtual queue token instantly.</p>

                <div className="input-group">
                    <label> Select Branch </label>

                    <select value={branch}
                    onChange={(e) => setBranch(e.target.value)}>
                        <option value="">Choose a Branch</option>
                        <option> MSIT main campus</option>
                    </select>
                </div>

                <div className ="input-group">
                    <label> Select Service</label>
                    <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}>
                        <option value=""> Choose a Service</option>
                        <option> Document Verification </option>
                        <option> Fee Payment </option>
                        <option> Certificate Collection</option>
                        <option> Student Help Desk</option>
                    </select>
                </div>

                <div className ="queue-info">
                    <div className="info-box">
                        <h3> People Waiting</h3>
                        <p> 18 </p>
                    </div>
                    <div className="info-box">
                        <h3>Estimated Wait</h3> 
                        <p> 15 mins</p>
                    </div>
                </div>
                <button className="join-btn"
                 onClick={handleJoinQueue}>
                    Join Queue
                </button>
            </div>
        </div>)
        {showPopup && (
        <div className="popup-overlay">

            <div className="success-popup">

            <div className="success-icon">
                ✓
            </div>

            <h2>Queue Joined Successfully!</h2>

            <p>
                Your request has been received successfully.
            </p>

            <div className="popup-details">

                <div>
                <span>🎟 Token</span>
                <strong>{generatedToken}</strong>
                </div>

                <div>
                <span>👥 Position</span>
                <strong>{queuePosition}</strong>
                </div>

                <div>
                <span>⏱ Wait Time</span>
                <strong>{estimatedWait}</strong>
                </div>

            </div>

            <button
                className="dashboard-btn"
                onClick={() => navigate("/dashboard")}
            >
                Go to Dashboard →
            </button>

            </div>

        </div>
);}
    
}
