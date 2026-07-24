import "./Dashboard.css";
import { FaTicketAlt, FaUsers, FaClock, FaBullhorn } from "react-icons/fa";
import { useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";

export default function Dashboard() {

    const [queueData] = useState({
        token: "--",
        serving: "--",
        peopleAhead: "--",
        waitTime: "--",
        customer: "User", 
        counter: "--",
        status: "Waiting",
    });
    return(
        <div className = "dashboard">
            <DashboardNavbar/>
            <div className = "welcome-card">
                <h1> Welcome Back 👋</h1>
                <p> Stay updated with your queue status in real time.</p>
            </div>

            <div className="stats-grid">
                <div className ="stats-card">
                    <FaTicketAlt className="stat-icon" />
                    <h3> My Token </h3>
                    <h2>{queueData.token} </h2>
                </div>

                <div className="stats-card">
                    <FaBullhorn className="stat-icon" />
                    <h3> Now Serving </h3>
                    <h2> {queueData.serving}</h2>
                </div>
                <div className="stats-card">
                    <FaUsers className="stat-icon" />
                    <h3>People Ahead</h3>
                    <h2>{queueData.peopleAhead}</h2>
                </div>

                <div className="stats-card">
                    <FaClock className="stat-icon" />
                    <h3>Estimated Wait</h3>
                    <h2>{queueData.waitingTime}</h2>
                </div>
            </div>
            <div className="progress-card">
                <div className="progress-header">
                    <h2> Queue Progress</h2>
                    <span> 70% </span>
                </div>
                <div className = "progress-bar">
                    <div className="progress-fill"></div>
                </div>
                <p className="status-text">
                ⏳ You're getting closer! Only <strong>5 people</strong> are ahead of you.
            </p>
            </div>

            {/* Recent Updates */}
            <div className="updates-card">
            <h2>Recent Updates</h2>

            <div className="update-item">
                <span className="done">✔</span>
                <p>Successfully joined the queue.</p>
            </div>

            <div className="update-item">
                <span className="done">✔</span>
                <p>Your token <strong>#054</strong> has been generated.</p>
            </div>

            <div className="update-item">
                <span className="done">✔</span>
                <p>The queue is moving smoothly.</p>
            </div>

            <div className="update-item">
                <span className="pending">⏳</span>
                <p>Waiting for your turn...</p>
            </div>
            </div>

            {/* Quick Actions */}
            <div className="actions-card">
            <h2>Quick Actions</h2>

            <div className="button-group">
                <button className="primary-btn">
                Refresh Status
                </button>

                <button className="secondary-btn">
                Leave Queue
                </button>
            </div>
            </div>
            <div className="summary-card">
                <h2> Today's Queue Summary</h2>
                <div className="summary-grid">
                    <div className="summary-box">
                        <h3> People Served</h3>
                        <p> 127 </p>
                    </div>
                    <div classname="summary-box">
                        <h3>Average Wait</h3>
                        <p>11 mins</p>
                    </div>
                    <div className="summary-box">
                        <h3> Queue Status</h3>
                        <p className="active-status"> Active</p>
                    </div>
                </div>
            </div>
            {/* Digital Queue Ticket */}

        <div className="ticket-card">

            <div className="ticket-header">
                <h2>🎟 Digital Queue Ticket</h2>
                <span>ACTIVE</span>
            </div>

            <div className="ticket-details">

                <div>
                    <p>Token Number</p>
                    <h3>#054</h3>
                </div>

                <div>
                    <p>Customer</p>
                    <h3>Kanishka</h3>
                </div>

                <div>
                    <p>Counter</p>
                    <h3>A-03</h3>
                </div>

                <div>
                    <p>Date</p>
                    <h3>24 Jul 2026</h3>
                </div>

                <div>
                    <p>Estimated Time</p>
                    <h3>12 mins</h3>
                </div>

            </div>

            <div className="ticket-footer">
                <div className="qr-box">
                    QR
                </div>

                <p>Show this ticket at the service counter.</p>
            </div>

        </div>
        {/* Tips */}

        <div className="tips-card">

            <h2>💡 Tips & Announcements</h2>

            <div className="tip">
                <span>✔</span>
                <p>Keep this page open to receive live queue updates.</p>
            </div>

            <div className="tip">
                <span>📢</span>
                <p>Please arrive 5 minutes before your turn.</p>
            </div>

            <div className="tip">
                <span>⏰</span>
                <p>Your token remains valid for 10 minutes after being called.</p>
            </div>

        </div>
    </div>
        
    );
}