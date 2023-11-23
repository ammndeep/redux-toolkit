import React from "react";
import { useDispatch } from "react-redux";
import { darkModeActions } from "../store/darkMode";

const Header = () => {
    const dispatch = useDispatch();
    const handleDarkTheme = () => {
        dispatch(darkModeActions.toggleDark());
    }
    return (
        <div className="main-toggle-theme">
            <h1 className="display-2 fw-bold text-info">
                Counter Upgradation
            </h1>
            <div className="form-check form-switch dark-mode">
                <input className="form-check-input" type="checkbox" role="switch"
                    onClick={handleDarkTheme} />
                <label className="form-check-label text-warning">Dark Mode</label>
            </div >
        </div>
    );
};

export default Header;
