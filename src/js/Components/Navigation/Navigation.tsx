import React, {ReactNode} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavigationPropsInterface, NavigationStateInterface} from ".";
import {connect} from "react-redux";
import {USER_SUCCESS} from "../../Redux/Actions/Types/UserActionTypes";

class Navigation extends React.Component<NavigationPropsInterface, NavigationStateInterface>
{
    constructor(props: NavigationPropsInterface) {
        super(props);
        this.state = { user: props.userState.user };
    }

    static getDerivedStateFromProps(
        nextProps: NavigationPropsInterface,
        prevState: NavigationStateInterface
    ): NavigationStateInterface {
        if (nextProps.userState.type !== USER_SUCCESS) {
            return { ...prevState };
        }
        return {
            user: nextProps.userState.user,
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
    userState: state.userState,
}));

// @ts-ignore
export default connect(mapStateToProps, null)(Navigation);
