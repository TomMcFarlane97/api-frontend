import React, {ChangeEvent, Dispatch, FormEvent, ReactNode} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {UserFormPropsInterface, UserFormStateInterface} from "./index";
import {UserKeyType} from "../../Interfaces/EntityKeyNames";
import {User} from "../../Interfaces/Redux";
import {connect, RootStateOrAny} from "react-redux";
import {requestLoading} from "../../Redux/Actions/LoadingAction";

class UserForm extends React.Component<UserFormPropsInterface, UserFormStateInterface> {
    constructor(props: UserFormPropsInterface) {
        super(props);

        this.state = { user: props.user, isRequestLoading: false }
    }

    static getDerivedStateFromProps(
        nextProps: UserFormPropsInterface,
        prevState: UserFormStateInterface
    ): null|UserFormStateInterface {
        if (prevState.user?.id && nextProps.isRequestLoading === prevState.isRequestLoading) {
            return null;
        }

        const { user, isRequestLoading } = nextProps;
        return {
            ...prevState,
            user,
            isRequestLoading,
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
        const { submitUserData } = this.props;
        submitUserData(user);
    }

    render(): ReactNode {
        const { user, isRequestLoading } = this.state;
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
                            disabled={!user || isRequestLoading}
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
                            disabled={!user || isRequestLoading}
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
                            disabled={!user || isRequestLoading}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!user || isRequestLoading}>
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = ((state: RootStateOrAny) => ({
    isRequestLoading: state.loadingState.loading
}))

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        setRequestLoadingState: (isLoading: boolean) => dispatch(requestLoading(isLoading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
