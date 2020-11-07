import React, {ReactNode} from "react";
import {Button, Modal} from "react-bootstrap";
import {LoginFormPropsInterface} from "./LoginFormPropsInterface";
import {LoginFormStateInterface} from "./LoginFormStateInterface";

export default class LoginForm extends React.Component<LoginFormPropsInterface, LoginFormStateInterface> {
    constructor(props: LoginFormPropsInterface) {
        super(props);

        this.state = { showLogin: props.showLogin, };
    }

    static getDerivedStateFromProps(
        nextProps: LoginFormPropsInterface,
        prevState: LoginFormStateInterface
    ): null|LoginFormStateInterface {
        if (nextProps.showLogin === prevState.showLogin) {
            return null;
        }

        return {
            showLogin: nextProps.showLogin,
        };
    }

    render(): ReactNode {
        const { handleLoginClick } = this.props;
        const { showLogin } = this.state;
        return (
            <Modal
                animation={true}
                show={showLogin}
                onHide={() => handleLoginClick()}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login details</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={(event: MouseEvent) => handleLoginClick(event)}
                    >
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
