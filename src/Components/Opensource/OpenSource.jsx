import React from "react";
import "./OpenSource.css"; 

const OpenSource = () => {
  return (
    <div className="openSource">
      <div className="opensource-item">
        <div className="info">
          <h2>Open Source Contributions</h2>
          <p>
            Actively contributing to open-source projects, collaborating with
            the global community to improve and enhance software functionality.
          </p>
        </div>
        <button
          className="linkButton"
          onClick={() =>
            window.open("your_open_source_profile_link_here", "_blank")
          }
        >
          Explore Contributions
        </button>
      </div>

      <div className="opensource-item">
        <div className="info">
          <h2>Open Source Contributions</h2>
          <p>
            Actively contributing to open-source projects, collaborating with
            the global community to improve and enhance software functionality.
          </p>
        </div>
        <button
          className="linkButton"
          onClick={() =>
            window.open("your_open_source_profile_link_here", "_blank")
          }
        >
          Explore Contributions
        </button>
      </div>

      <div className="opensource-item">
        <div className="info">
          <h2>Open Source Contributions</h2>
          <p>
            Actively contributing to open-source projects, collaborating with
            the global community to improve and enhance software functionality.
          </p>
        </div>
        <button
          className="linkButton"
          onClick={() =>
            window.open("your_open_source_profile_link_here", "_blank")
          }
        >
          Explore Contributions
        </button>
      </div>
    </div>
  );
};

export default OpenSource;
