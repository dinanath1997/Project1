import React from "react";

function Nav() {
  const w3_open = () => {
    document.getElementById("mySidebar");
    console.log("Hello");

  };

  const w3_close = () => {
    document.getElementById("mySidebar");
  };
  return (
    <nav>
      <div>
        <button className="w3-button w3-white w3-xxlarge" onclick={w3_open()}
       
        >
          &#9776;
        </button>
      </div>

      <div
        className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left"
        id="mySidebar"
      >
        <button className="w3-bar-item w3-button w3-large" onclick={w3_close()}>
          Close &times;
        </button>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
      </div>
      <div>
        <h1 className="header">DASH-BOARD</h1>
      </div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-toggle="dropdown"  
        >
          Profile
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">LogOut</a>
          </li>
          <li>
            <a href="#">MyProfile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
