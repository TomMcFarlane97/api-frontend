import React, {ReactNode} from "react";
import {Col, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavigationPropsInterface} from "./NavigationPropsInterface";
import {NavigationStateInterface} from "./NavigationStateInterface";
import {connect} from "react-redux";
import {User} from "../../Interfaces/Redux";

class Navigation extends React.Component<NavigationPropsInterface, NavigationStateInterface>
{
    constructor(props: NavigationPropsInterface) {
        super(props);
        this.state = { user: props.user };
    }

    static getDerivedStateFromProps(
        nextProps: NavigationPropsInterface,
        prevState: NavigationStateInterface
    ): NavigationStateInterface {
        return {
            user: nextProps.user,
        }
    }

    render(): ReactNode {
        const name: undefined|string = this.state?.user?.firstName;
        return (
            <Navbar bg="dark" variant="dark" className="d-flex" sticky="top">
                <Navbar.Brand className="mr-auto" href="#home">Home</Navbar.Brand>
                <Nav>
                    <NavDropdown
                        disabled={!name}
                        title={`Welcome ${name}`}
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}

const mapStateToProps = ((state: any) => ({
    user: state.user,
}));

// @ts-ignore
export default connect(mapStateToProps, null)(Navigation);
