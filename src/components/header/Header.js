import React, {useState} from 'react';
import './header.css';

const Header = () => {
  // State for tracking whether the profile panel is open
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <div className="header">
      {isProfileOpen && 
         <div className={`profile-panel ${isProfileOpen ? 'open' : ''}`} onClick={() => setProfileOpen(false)}>
          <img src="images\\profilepic.png" alt="Profile Pic in Panel"/>
          <div>Artist Name</div>
          <div>Community</div>
          <div>
            <details>
              <summary>Create</summary>
              <ul>
                <li>Profile Edit</li>
                <li>Write</li>
              </ul>
            </details>
            <details>
              <summary>Settings and Support</summary>
              <ul>
                <li>Settings and Privacy</li>
                <li>Log Out</li>
              </ul>
            </details>
          </div>
        </div>
      }
      <div className="profile-section">
        <img src="images\\profilepic.png" onClick={() => setProfileOpen(!isProfileOpen)} alt="Profile" className="profile-pic"/>
        <div className="profile-name">Profile Name</div>
      </div>
      <div className="followers-section">
        <span className="followers-label">Community: </span>
        <span className="followers-count">0</span>
      </div>
    </div>
  );
}

export default Header;
