import { useRef, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";


export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    curryear: "",
    semester: "",
    phone: "",
    enrollment: "",
    branch: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  
  const userNameRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const curryearRef = useRef();
  const semesterRef = useRef();
  const phoneRef = useRef();
  const enrollmentRef = useRef();
  const branchRef = useRef();
  const passwordRef = useRef();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.userName) {
      errors.userName = "Username is required";
      isValid = false;
    }

    if (!formData.name) {
      errors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.curryear) {
      errors.curryear = "Current Year is required";
      isValid = false;
    }

    if (!formData.semester) {
      errors.semester = "Current Semester is required";
      isValid = false;
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.enrollment) {
      errors.enrollment = "Enrollment is required";
      isValid = false;
    }

    if (!formData.branch) {
      errors.branch = "Branch is required";
      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can perform sign-up functionality here
      console.log("Sign-up successful");
    } else {
      console.log("Sign-up failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            ref={userNameRef}
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            ref={nameRef}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="curryear"
            placeholder="Current Year"
            ref={curryearRef}
            value={formData.curryear}
            onChange={handleChange}
          />
          {errors.curryear && <span className="error">{errors.curryear}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="semester"
            placeholder="Current Semester"
            ref={semesterRef}
            value={formData.semester}
            onChange={handleChange}
          />
          {errors.semester && <span className="error">{errors.semester}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            ref={phoneRef}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="enrollment"
            placeholder="Enrollment"
            ref={enrollmentRef}
            value={formData.enrollment}
            onChange={handleChange}
          />
          {errors.enrollment && <span className="error">{errors.enrollment}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            ref={branchRef}
            value={formData.branch}
            onChange={handleChange}
          />
          {errors.branch && <span className="error">{errors.branch}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <span  >
          Already SingedUp <Link to="/login"><b>Sign in</b></Link>
        </span>
      </form>
    </div>
  );
}
