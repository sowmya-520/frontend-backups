import NavBarPage from "./NavBarPage";
import './RegistrationPage.css';
import React from 'react';
import {useState , useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "./RegisterSlice";

const RegistrationPage=()=>
{
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    });
    const [showMessage, setShowMessage] = useState(""); 
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const HandleRegister = async (e) => {
      e.preventDefault();
      dispatch(registerUser(formData));
      }

    const isAuthenticated = useSelector(state => state.register.success);
    useEffect(() => {
        if (isAuthenticated) {
          setShowMessage(true);
          const timeoutId = setTimeout(() => {
            setShowMessage(false);
            navigate('/login');
          }, 3000);
      
          return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
        }
      }, [isAuthenticated, navigate]);
      
    return (
      <div>
        <NavBarPage />
        <div>registerpage</div>
        <div className="registration-container">
          <h2 className="h2">Registration</h2>
          {showMessage && (
            <div>
              {isAuthenticated
                ? "Registration successful!"
                : "Registration failed!"}
            </div>
          )}

          <form onSubmit={HandleRegister}>
            <div className="form-group">
              <label>firstName</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label>lastName</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label>UserName:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="address"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password "
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    );
}
export default RegistrationPage;