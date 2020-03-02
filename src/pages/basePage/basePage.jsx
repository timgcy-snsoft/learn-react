import React from "react";
import "./basePage.scss"
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
// } from 'reactstrap';

export default class BasePage extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isOpen: false
        // };
        // this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }
    // handleMenuToggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }

    render() {
        const { title, children } = this.props;

        return (
            <>
                <div className={'base-page'}>
                    <div className={"base-page-header"}>
                        {title && <div className="page-title">{title}</div>}
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        {/* <Navbar color="light" light expand="md">
                            <NavbarBrand href="/LiewYihChan">Home</NavbarBrand>
                            <NavbarToggler onClick={this.handleMenuToggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/LiewYihChan/About">About</NavLink>
                                        <NavLink href="/LiewYihChan/Contact">Contact</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar> */}
                    </div>
                    {children}
                </div>
            </>
        );
    }
}
