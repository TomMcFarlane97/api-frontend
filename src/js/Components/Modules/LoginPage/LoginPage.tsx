import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import LoginForm from "../../LoginForm/LoginForm";

export class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = { showLogin: false, };
    }

    handleLoginClick(event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        const { showLogin } = this.state;
        this.setState({
            showLogin: !showLogin,
        })
    }

    render() {
        const { showLogin } = this.state;
        return <>
            <Row>
                <Col>
                    <h1>Please log in</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        variant="primary"
                        onClick={(event: MouseEvent) => this.handleLoginClick(event)}
                    >
                        Login
                    </Button>
                </Col>
            </Row>

            <LoginForm showLogin={showLogin} handleLoginClick={this.handleLoginClick} />
        </>
    }
}
