import React, {Dispatch} from "react";
import {Col, Row, Button} from "react-bootstrap";
import LoginForm from "../../LoginForm/LoginForm";
import {LoginPagePropsInterface} from "./LoginPagePropsInterface";
import {LoginPageStateInterface} from "./LoginPageStateInterface";
import {connect, RootStateOrAny} from "react-redux";
import {loginAction} from "../../../Redux/Actions/AuthenticationActions";
import {Redirect} from "react-router";

class LoginPage extends React.Component<LoginPagePropsInterface, LoginPageStateInterface> {
    constructor(props: LoginPagePropsInterface) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = { showLogin: false, loggedIn: false };
    }

    static getDerivedStateFromProps(
        nextProps: LoginPagePropsInterface,
        prevState: LoginPageStateInterface
    ): null|LoginPageStateInterface {
        if (nextProps.loggedIn === prevState.loggedIn) {
            return null;
        }

        return {
            ...prevState,
            loggedIn: nextProps.loggedIn,
        }
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

    handleLogin(emailAddress: string): void {
        const { loginUserAction } = this.props;
        loginUserAction(emailAddress);
    }

    render() {
        const { showLogin, loggedIn } = this.state;
        if (loggedIn) {
            return (<Redirect to="/" />);
        }
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

            <LoginForm
                showLogin={showLogin}
                handleLoginClick={this.handleLoginClick}
                loginUser={this.handleLogin}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateOrAny, ownProps: any) => {
    return {
        loggedIn: state.authenticationState.data.loggedIn,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return  {
        loginUserAction: (emailAddress: string) => dispatch(loginAction(emailAddress)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

