import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import navMenuList from '../constants/NavbarMenuList';

export default class Navbar extends Component {

    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };


    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >
                            <img src={logo} width={140} alt="Hotel" />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                        {
                            navMenuList.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link to={item.path} >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
