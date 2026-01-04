import React, { useReducer, useState } from "react";
import { ICONS } from "../../Utils/icon";
import styles from "./Register.module.css";

const Register = () => {
    const initialState = {
        organizationName: "",
        industryType: "",
        country: "",
        AdminFullName: "",
        AdminEmail: "",
        AdminPhoneNumber: "",
        password: "",
        confirmPassword: "",
        iAgree: false,
    };

    const reducer = (state, action) => {
        const { name, value } = action;
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const industries = [
        { value: "", name: "-- Select Industry --" },
        { value: "IT", name: "Information Technology" },
        { value: "Software", name: "Software Development" },
        { value: "Banking", name: "Banking & Finance" },
        { value: "Insurance", name: "Insurance" },
    ];

    const countries = [
        { value: "", name: "-- Select Country --" },
        { value: "IN", name: "India" },
        { value: "US", name: "United States" },
        { value: "UK", name: "United Kingdom" },
        { value: "SG", name: "Singapore" },
    ];

    const countryCodes = ["+91", "+1", "+44", "+65"];
    const [countryCode, setCountryCode] = useState("+91");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("REGISTER DATA", state);
    };

    const {
        Building2,
        Globe,
        Profile,
        Mail,
        Phone,
        Lock,
        CheckCircle2,
    } = ICONS;

    return (
        <div className="container">
            <div className='row my-4 '>
                <div className={`col-md-6 d-none d-md-flex ${styles.leftPanel}`}>
                    <div className={styles.leftContent}>
                        <div className="d-flex align-items-center gap-3 mb-4 ms-3">
                            <div className={styles.logoBox}>
                                <Building2 size={28} color="#fff" />
                            </div>
                            <div>
                                <h4 className="mb-0 text-white">Enterprise</h4>
                                <small className="text-light">Management System</small>
                            </div>
                        </div>

                        <h1 className="text-white fw-bold mb-3 ms-3">
                            Create Your Organization Account
                        </h1>

                        <p className="text-light mb-4 ms-3">
                            Join thousands of companies managing their operations efficiently
                        </p>

                        <ul className={`${styles.featureList} ms-3`}>
                            <li>
                                <CheckCircle2 size={18} /> Secure & Compliant
                                <span>Enterprise-grade security for your data</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} /> 24/7 Support
                                <span>Our team is always here to help</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} /> Global Reach
                                <span>Operate seamlessly across borders</span>
                            </li>
                        </ul>


                    </div>
                </div>

                <div className={`${styles.formStyle} col-md-6`}>


                    <form onSubmit={handleSubmit}>
                        {/* Organization */}
                        <label className="form-label d-flex align-items-center gap-2">
                            <Building2 size={18} color="#6c757d" /> Organization Name
                        </label>
                        <input
                            type="text"
                            name="organizationName"
                            className={` ${styles.customInput} form-control mb-3`}
                            placeholder="Enter organization name"
                            onChange={(e) =>
                                dispatch({ name: e.target.name, value: e.target.value })
                            }
                        />

                        {/* Industry & Country */}
                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label d-flex align-items-center gap-2">
                                    <Globe size={18} color="#6c757d" /> Industry Type
                                </label>
                                <select
                                    className={` ${styles.customInput} form-control mb-3`}
                                    name="industryType"
                                    onChange={(e) =>
                                        dispatch({ name: e.target.name, value: e.target.value })
                                    }
                                >
                                    {industries.map((i, idx) => (
                                        <option key={idx} value={i.value}>
                                            {i.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label d-flex align-items-center gap-2">
                                    <Globe size={18} color="#6c757d" /> Country
                                </label>
                                <select
                                    className={` ${styles.customInput} form-control mb-3`}
                                    name="country"
                                    onChange={(e) =>
                                        dispatch({ name: e.target.name, value: e.target.value })
                                    }
                                >
                                    {countries.map((c, idx) => (
                                        <option key={idx} value={c.value}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            {/* Admin Name */}
                            <div className="col-md-6">
                                <label className="form-label d-flex align-items-center gap-2">
                                    <Profile size={18} color="#6c757d" /> Admin Full Name
                                </label>
                                <input
                                    type="text"
                                    name="AdminFullName"
                                      className={` ${styles.customInput} form-control mb-3`}
                                    onChange={(e) =>
                                        dispatch({ name: e.target.name, value: e.target.value })
                                    }
                                />
                            </div>


                            {/* Email */}
                            <div className="col-md-6">
                                <label className="form-label d-flex align-items-center gap-2">
                                    <Mail size={18} color="#6c757d" /> Admin Email
                                </label>
                                <input
                                    type="email"
                                    name="AdminEmail"
                                      className={` ${styles.customInput} form-control mb-3`}
                                    onChange={(e) =>
                                        dispatch({ name: e.target.name, value: e.target.value })
                                    }
                                />
                            </div>
                        </div>


                        {/* Phone */}
                        <label className="form-label d-flex align-items-center gap-2">
                            <Phone size={18} color="#6c757d" /> Mobile Number
                        </label>
                        <div className="input-group mb-3">
                            <select
                                  className={` ${styles.customInput} form-select mb-3`}
                                style={{ maxWidth: "90px" }}
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                                {countryCodes.map((c) => (
                                    <option key={c}>{c}</option>
                                ))}
                            </select>

                            <input
                                type="tel"
                                className={` ${styles.customInput} form-control mb-3`}
                                maxLength={10}
                                onChange={(e) =>
                                    dispatch({
                                        name: "AdminPhoneNumber",
                                        value: `${countryCode}${e.target.value}`,
                                    })
                                }
                            />
                        </div>


                        {/* Password */}
                        <label className="form-label d-flex align-items-center gap-2">
                            <Lock size={18} color="#6c757d" /> Password
                        </label>
                        <input
                            type="password"
                            name="password"
                              className={` ${styles.customInput} form-control mb-3`}
                            onChange={(e) =>
                                dispatch({ name: e.target.name, value: e.target.value })
                            }
                        />

                        {/* Confirm Password */}
                        <label className="form-label d-flex align-items-center gap-2">
                            <Lock size={18} color="#6c757d" /> Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                              className={` ${styles.customInput} form-control mb-3`}
                            onChange={(e) =>
                                dispatch({ name: e.target.name, value: e.target.value })
                            }
                        />

                        {/* Terms */}
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={(e) =>
                                    dispatch({ name: "iAgree", value: e.target.checked })
                                }
                            />
                            <label className="form-check-label d-flex align-items-center gap-2">
                                I agree to Terms & Conditions
                            </label>
                        </div>

                        <button className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;
