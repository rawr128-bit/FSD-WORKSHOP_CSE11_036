// import { useLocation, useNavigate } from "react-router-dom";
// import "./dashboard.css";

// function Dashboard() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get user data sent from Signup/Login
//   const user = location.state?.user;

//   return (
//     <div className="dashboard-container">

//       <div className="dashboard-box">

//         <h1>Dashboard</h1>

//         {user ? (
//           <>
//             <div className="welcome-section">
//               <h2>Welcome, {user.name} 👋</h2>
//               <p>Your account has been created successfully.</p>
//             </div>

//             <div className="user-details">

//               <h3>Account Details</h3>

//               <div className="detail-row">
//                 <span>ID</span>
//                 <strong>{user.id}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Name</span>
//                 <strong>{user.name}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Class</span>
//                 <strong>{user.class}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Registration</span>
//                 <strong>{user.reg}</strong>
//               </div>

//             </div>

//             <div className="dashboard-actions">

//               <button
//                 onClick={() => navigate("/api-tester")}
//               >
//                 Open API Tester
//               </button>

//               <button
//                 className="logout-btn"
//                 onClick={() => navigate("/login")}
//               >
//                 Logout
//               </button>

//             </div>
//           </>
//         ) : (
//           <div className="no-user">

//             <h2>No User Data Found</h2>

//             <p>
//               Please create an account or login first.
//             </p>

//             <button
//               onClick={() => navigate("/signup")}
//             >
//               Create Account
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>

//           </div>
//         )}

//       </div>

//     </div>
//   );
// }

// export default Dashboard;





// import { useLocation, useNavigate } from "react-router-dom";
// import "./dashboard.css";

// function Dashboard() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Receive user from Signup
//   const user = location.state?.user;

//   return (
//     <div className="dashboard-container">

//       <div className="dashboard-box">

//         <h1>User Dashboard</h1>

//         {user ? (

//           <>
//             {/* Welcome */}
//             <div className="welcome-section">

//               <h2>
//                 Welcome, {user.name} 👋
//               </h2>

//               <p>
//                 Your account has been created successfully.
//               </p>

//             </div>


//             {/* User details */}
//             <div className="user-details">

//               <h3>Account Details</h3>

//               <div className="detail-row">
//                 <span>ID</span>
//                 <strong>{user.id}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Name</span>
//                 <strong>{user.name}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Class</span>
//                 <strong>{user.class}</strong>
//               </div>

//               <div className="detail-row">
//                 <span>Registration</span>
//                 <strong>{user.reg}</strong>
//               </div>

//             </div>


//             {/* Buttons */}
//             <div className="dashboard-actions">

//               <button
//                 onClick={() => navigate("/api-tester")}
//               >
//                 Open API Tester
//               </button>

//               <button
//                 className="logout-btn"
//                 onClick={() => navigate("/login")}
//               >
//                 Logout
//               </button>

//             </div>

//           </>

//         ) : (

//           /* No user data */
//           <div className="no-user">

//             <h2>
//               No User Data Found
//             </h2>

//             <p>
//               Please create an account or login first.
//             </p>

//             <button
//               onClick={() => navigate("/signup")}
//             >
//               Create Account
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }

// export default Dashboard;




// import { useLocation } from "react-router-dom";

// function Dashboard() {
//   const location = useLocation();

//   const user = location.state?.user;

//   console.log("Dashboard received:", user);

//   return (
//     <div>
//       <h1>User Dashboard</h1>

//       {user ? (
//         <div>
//           <h2>Welcome, {user.name} 👋</h2>

//           <p>ID: {user.id}</p>
//           <p>Name: {user.name}</p>
//           <p>Class: {user.class}</p>
//           <p>Registration: {user.reg}</p>
//         </div>
//       ) : (
//         <div>
//           <h2>No user data found</h2>
//           <p>The dashboard was opened without user information.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;





import { useLocation, useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  return (
    <div className="dashboard-container">

      <div className="dashboard-box">

        <h1>User Dashboard</h1>

        {user ? (
          <>
            <div className="welcome-section">
              <h2>Welcome, {user.name} 👋</h2>
              <p>Your account has been created successfully.</p>
            </div>

            <div className="user-details">

              <h3>Account Details</h3>

              <div className="detail-row">
                <span>ID</span>
                <strong>{user.id}</strong>
              </div>

              <div className="detail-row">
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="detail-row">
                <span>Class</span>
                <strong>{user.class}</strong>
              </div>

              <div className="detail-row">
                <span>Registration</span>
                <strong>{user.reg}</strong>
              </div>

            </div>

            <div className="dashboard-actions">

              <button
                onClick={() => navigate("/api-tester")}
              >
                Open API Tester
              </button>

              <button
                className="logout-btn"
                onClick={() => navigate("/login")}
              >
                Logout
              </button>

            </div>
          </>
        ) : (
          <div className="no-user">

            <h2>No User Data Found</h2>

            <p>
              Please create an account or login first.
            </p>

            <button onClick={() => navigate("/signup")}>
              Create Account
            </button>

            <button onClick={() => navigate("/login")}>
              Login
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;