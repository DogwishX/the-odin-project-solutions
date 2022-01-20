import { Link } from "react-router-dom";
import useToggle from "../../../hooks/useToggle";
import "./Profile.css";

function Profile({ device }) {
  const [isDropdownOpen, toggleDropdown] = useToggle(false);

  return (
    <div className={`profile`} onClick={toggleDropdown}>
      <div className="profile__icon">
        <svg viewBox="0 0 1024 1024" fill="white" aria-label="Profile">
          <title>Profile</title>
          <path d="M730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084Q106.388 763.84 84.96 802.41t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path>
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="profile__dropdown">
          <Link to="/account">Account</Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
