import React, { useState } from "react";
import logo from "../assets/enerrgy-logo.png";
import eth from "../assets/ethereum-coin.png";
import { options } from "../constants";
import CustomSelect from "./CustomSelect";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [selectedOption, setSelectedOption] = useState(options?.[0]);

  const handleSelectChange = (selectedOption) => {
    console.log("sasasasasas", selectedOption);
    setSelectedOption(selectedOption);
  };
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  console.log("images optins", options);
  console.log("selectedOption", selectedOption);
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex responsive_width justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="ENERGY Sunrise"
              style={{ width: "150px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarScroll"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse justify-content-between w-100 ${
            isNavbarOpen ? "show" : ""
          }`}
          id="navbarScroll"
        >
          <ul
            className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#hero_sec">
                Token
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#xenergy_sec">
              Xenergy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technical_sec">
              Technical
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faqs">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blogs
              </a>
            </li>
          </ul>
          <div className="wallet d-flex align-items-center">
            <div className="selector-dropdown">
              {/* <select className="form-select" value={selectedOption} onChange={handleSelectChange}>
                {options.map(option => (
                  <div key={option.value} value={option.value}>
                    {<img src={option?.img} alt={option.label} style={{ width: '25px', height: '25px', marginRight: '8px' }} />}
                    {option.label}
                  </div>
                ))}
              </select> */}
              <div className="">
                <CustomSelect
                  options={options}
                  value={selectedOption}
                  selectedOption={selectedOption}
                  handleSelectChange={handleSelectChange}
                />
              </div>
            </div>
            <button className="connect-button">Connect Wallet</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
