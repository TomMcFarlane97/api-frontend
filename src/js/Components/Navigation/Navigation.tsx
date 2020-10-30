import React, {ReactNode} from "react";
import {Col, Navbar} from "react-bootstrap";
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
        console.log('Homepage module', nextProps.user);
        return {
            user: nextProps.user,
        }
    }

    render(): ReactNode {
        const name: undefined|string = this.state?.user?.firstName;
        return (
            <Navbar variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {name ? `Welcome ${name}` : `Please log in to view the system.`}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = ((state: any) => ({
    user: state.user,
}));

// @ts-ignore
export default connect(mapStateToProps, null)(Navigation);
