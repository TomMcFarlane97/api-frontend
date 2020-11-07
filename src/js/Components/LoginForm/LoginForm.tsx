import React, {ChangeEvent, FormEvent, ReactNode} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {LoginFormPropsInterface} from "./LoginFormPropsInterface";
import {LoginFormStateInterface} from "./LoginFormStateInterface";
import {LoginFormKeyTypes} from "../../Interfaces/EntityKeyNames";

export default class LoginForm extends React.Component<LoginFormPropsInterface, LoginFormStateInterface> {
    constructor(props: LoginFormPropsInterface) {
        super(props);

        this.state = {
            showLogin: props.showLogin,
            emailAddress: '',
        };
    }

    static getDerivedStateFromProps(
        nextProps: LoginFormPropsInterface,
        prevState: LoginFormStateInterface
    ): null|LoginFormStateInterface {
        if (nextProps.showLogin === prevState.showLogin) {
            return null;
        }

        return {
            ...prevState,
            showLogin: nextProps.showLogin,
        };
    }

    handleChange(event: ChangeEvent<any>): void {
        const { name, value }: LoginFormKeyTypes = event.target;
        console.log(name, value);
        this.setState((state: LoginFormStateInterface): LoginFormStateInterface => ({
            ...state,
            [name]: value,
        } as LoginFormStateInterface ));
    }

    handleSubmit(event: FormEvent): void {
        event.preventDefault();
        const { emailAddress } = this.state;
        const { loginUser } = this.props;
        loginUser(emailAddress);
    }

    render(): ReactNode {
        const { handleLoginClick } = this.props;
        const { showLogin, emailAddress } = this.state;
        return (
            <Modal
                animation={true}
                backdrop="static"
                size="lg"
                show={showLogin}
                onHide={() => handleLoginClick()}
            >
                <Form
                    onSubmit={(event: FormEvent) => this.handleSubmit(event)}
                    className="p-4"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Login details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="userForm" as={Row} >
                            <Form.Label column sm="4">Email Address</Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    name="emailAddress"
                                    defaultValue={emailAddress}
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </Col>
                        </Form.Group>
                </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={(event: MouseEvent) => handleLoginClick(event)}
                        >
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}
