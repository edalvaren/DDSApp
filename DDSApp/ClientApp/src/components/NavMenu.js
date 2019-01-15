import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                        <img alt="intralox" className="d-inline-block-align-top" width="45" height="30"
                        src="./logo.png"/>
                        DirectDrive Systems &#8482;
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/spiralDocs"> Documentation </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/search">Search</NavLink>
                                </NavItem>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                </input>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>                            </form>
                        </Collapse>
                    </Container>
                </Navbar>
            </header >
        );
    }
}
