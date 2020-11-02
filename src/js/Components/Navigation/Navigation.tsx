import React, {ReactNode} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavigationPropsInterface, NavigationStateInterface} from ".";
import {connect, RootStateOrAny} from "react-redux";
import {USER_SUCCESS} from "../../Constants/ActionTypes/UserActionTypes";
import {Link} from "react-router-dom";


class Navigation extends React.Component<NavigationPropsInterface, NavigationStateInterface> {
    constructor(props: NavigationPropsInterface) {
        super(props);
        this.state = { user: props.userState.user };
    }

    static getDerivedStateFromProps(
        nextProps: NavigationPropsInterface,
        prevState: NavigationStateInterface
    ): null|NavigationStateInterface {
        if (nextProps.userState.type !== USER_SUCCESS) {
            return null;
        }

        return {
            user: nextProps.userState.user,
        }
    }

    render(): ReactNode {
        const name: undefined|string = this.state?.user?.firstName;
        return (
            <Navbar bg="dark" variant="dark" className="d-flex" sticky="top">
                <Navbar.Brand className="mr-auto" as={Link} to="/">Home</Navbar.Brand>
                <Nav>
                    <NavDropdown
                        disabled={!name}
                        title={`Welcome ${name}`}
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}

const mapStateToProps = ((state: RootStateOrAny) => ({
    userState: state.userState,
}));

export default connect(mapStateToProps, null)(Navigation);
