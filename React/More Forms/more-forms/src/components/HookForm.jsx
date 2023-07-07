import React, { useState } from "react";

export const HookForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState();
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState();
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();
    //function to handle firstName**********
    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be atleast 2 characters long.");
        } else {
            setFirstNameError("");
        }
    };
//function to handle lastName**********
    const handleLastName = (e) => {
        setLastName(e.target.value);

        // if (lastName.length < 2) {
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be atleast 2 characters long.");
        } else {
            setLastNameError("");
        }
    };
//function to handle Email**********
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be atleast 5 characters");
        } else {
            setEmailError("");
        }
    };
//function to handle Password**********
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be atleast 8 characters.");
        } else {
            setPasswordError("");
        }
    };
//function to handle ConfirmePassword**********
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match.");
        } else {
            setConfirmPasswordError("");
        }
    };

    return (
        <>
            <form>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleFirstName}
                    />
                    {firstNameError ? <p>{firstNameError}</p> : ""}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleLastName}
                    />
                    {lastNameError ? <p>{lastNameError}</p> : ""}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={handleEmail} />
                    {emailError ? <p>{emailError}</p> : ""}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handlePassword}
                    />
                    {passwordError ? <p>{passwordError}</p> : ""}
                </div>
                <div>
                    <label>Confirm:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleConfirmPassword}
                    />
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
                </div>
            </form>
            {/* <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div> */}
        </>
    );
};

export default HookForm;