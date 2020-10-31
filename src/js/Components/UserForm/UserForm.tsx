import React, {ChangeEvent, FormEvent, ReactNode} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {UserFormPropsInterface, UserFormStateInterface} from "./index";
import {UserKeyType} from "../../Interfaces/EntityKeyNames";
import {User} from "../../Interfaces/Redux";

export default class UserForm extends React.Component<UserFormPropsInterface, UserFormStateInterface> {
    constructor(props: UserFormPropsInterface) {
        super(props);

        this.state = { user: props.user }
    }

    static getDerivedStateFromProps(
        nextProps: UserFormPropsInterface,
        prevState: UserFormStateInterface
    ): UserFormStateInterface {
        if (prevState.user?.id) {
            return { ...prevState };
        }
        console.log('static - ' + nextProps.user?.firstName);
        return {
            ...prevState,
            user: nextProps.user,
        }
    }

    handleChange(event: ChangeEvent<any>): void {
        const { name, value }: UserKeyType = event.target;
        this.setState((state: UserFormStateInterface): UserFormStateInterface => ({
            ...state,
            user: {
                ...state.user,
                [name]: value,
            } as User
        } as UserFormStateInterface ));
    }

    handleSubmit(event: FormEvent): void {
        event.preventDefault();
        const { user } = this.state;
        console.log(user?.firstName);
        this.props.submitUserData(user);
    }

    render(): ReactNode {
        const { user } = this.state;
        console.log(user?.firstName);
        return (
            <Form onSubmit={(event: FormEvent) => this.handleSubmit(event)} className="p-4">
                <Form.Group controlId="userForm" as={Row} >
                    <Form.Label column sm="2">First Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            defaultValue={user?.firstName}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="userForm" as={Row} >
                    <Form.Label column sm="2">Last Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            defaultValue={user?.lastName}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="userForm" as={Row}>
                    <Form.Label column sm="2">Email address</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="emailAddress"
                            defaultValue={user?.emailAddress}
                            onChange={(event) => this.handleChange(event)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!user}>
                    Submit
                </Button>
            </Form>
        );
    }
}
