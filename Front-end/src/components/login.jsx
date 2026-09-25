// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./login.css";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     reg: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/login",
//         {
//           name: formData.name,
//           reg: formData.reg
//         }
//       );

//       console.log("Login successful:", response.data);

//       navigate("/dashboard", {
//         state: {
//           user: response.data.user
//         }
//       });

//     } catch (error) {
//       console.error("Login error:", error);

//       if (error.response) {
//         setError(
//           error.response.data.message || "Login failed"
//         );
//       } else {
//         setError("Unable to connect to server");
//       }
//     }
//   };

//   return (
//     <div className="login-container">

//       <div className="login-box">

//         <h1>Welcome Back</h1>

//         <p>Login to continue</p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="reg"
//             placeholder="Enter registration"
//             value={formData.reg}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         {error && (
//           <p className="error">
//             {error}
//           </p>
//         )}

//         <p>
//           Don't have an account?
//         </p>

//         <button
//           type="button"
//           onClick={() => navigate("/signup")}
//         >
//           Create Account
//         </button>

//       </div>

//     </div>
//   );
// }

// export default Login;






// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     reg: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });

//   };


//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     setError("");

//     try {

//       const response = await axios.post(
//         "http://localhost:3000/login",
//         {
//           name: formData.name,
//           reg: formData.reg
//         }
//       );

//       console.log(
//         "Login response:",
//         response.data
//       );

//       const user = response.data.user;

//       // Send logged-in user to dashboard
//       navigate("/dashboard", {
//         state: {
//           user: user
//         }
//       });

//     } catch (error) {

//       console.error(
//         "Login error:",
//         error
//       );

//       if (error.response) {

//         setError(
//           error.response.data.message ||
//           "Login failed"
//         );

//       } else {

//         setError(
//           "Unable to connect to server"
//         );

//       }

//     }

//   };


//   return (

//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f4f6f8"
//       }}
//     >

//       <div
//         style={{
//           width: "380px",
//           background: "white",
//           padding: "35px",
//           borderRadius: "12px",
//           boxShadow:
//             "0 5px 25px rgba(0,0,0,0.12)"
//         }}
//       >

//         <h1>
//           Login
//         </h1>

//         <p>
//           Login to your account
//         </p>


//         <form onSubmit={handleSubmit}>

//           {/* Name */}

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{
//               width: "100%",
//               padding: "12px",
//               marginBottom: "15px",
//               boxSizing: "border-box"
//             }}
//           />


//           {/* Registration */}

//           <input
//             type="text"
//             name="reg"
//             placeholder="Enter registration"
//             value={formData.reg}
//             onChange={handleChange}
//             required
//             style={{
//               width: "100%",
//               padding: "12px",
//               marginBottom: "15px",
//               boxSizing: "border-box"
//             }}
//           />


//           {/* Login button */}

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               background: "#2563eb",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer"
//             }}
//           >
//             Login
//           </button>

//         </form>


//         {/* Error */}

//         {error && (

//           <p
//             style={{
//               color: "red",
//               marginTop: "15px"
//             }}
//           >
//             {error}
//           </p>

//         )}


//         {/* Signup */}

//         <p
//           style={{
//             marginTop: "20px"
//           }}
//         >
//           Don't have an account?
//         </p>

//         <button
//           onClick={() =>
//             navigate("/signup")
//           }
//           style={{
//             width: "100%",
//             padding: "10px",
//             background: "#555",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer"
//           }}
//         >
//           Create Account
//         </button>

//       </div>

//     </div>

//   );

// }

// export default Login;







import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          name: name,
          reg: reg
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      const user = response.data.user;

      navigate("/dashboard", {
        state: {
          user: user
        }
      });

    } catch (error) {
      console.error("LOGIN ERROR:", error);

      if (error.response) {
        setError(
          error.response.data.message ||
          "Invalid name or registration"
        );
      } else if (error.request) {
        setError(
          "Backend is not responding. Make sure the server is running."
        );
      } else {
        setError(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8"
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.12)"
        }}
      >
        <h1>Login</h1>
        <p>Login to your account</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              boxSizing: "border-box"
            }}
          />

          <input
            type="text"
            placeholder="Enter registration"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              boxSizing: "border-box"
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: loading ? "#999" : "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "15px",
              background: "#ffe5e5",
              padding: "10px",
              borderRadius: "5px"
            }}
          >
            {error}
          </p>
        )}

        <p style={{ marginTop: "20px" }}>
          Don't have an account?
        </p>

        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "100%",
            padding: "10px",
            background: "#555",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Login;