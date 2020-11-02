import React, {Dispatch, ReactNode} from "react";
import {AuthenticationPropsInterface} from "./AuthenticationPropsInterface";
import {connect, RootStateOrAny} from "react-redux";
import {getAuthenticationFromStorage} from "../../Redux/Actions/AuthenticationActions";
import {AuthenticationStateInterface} from "./AuthenticationStateInterface";
import {Redirect, withRouter} from "react-router";
import {CLEAR_TOKENS} from "../../Constants/ActionTypes/TokenActionTypes";

class Authentication extends React.Component<AuthenticationPropsInterface, AuthenticationStateInterface> {
    constructor(props: AuthenticationPropsInterface) {
        super(props);
        this.state = {
            authenticationState: props.authenticationState,
            location: props.location,
            history: props.history,
            match: props.match,
            staticContext: props.staticContext,
        } as AuthenticationStateInterface;
    }

    static getDerivedStateFromProps(
        nextProps: AuthenticationPropsInterface,
        prevState: AuthenticationStateInterface
    ): null|AuthenticationStateInterface {
        console.log(nextProps);
        if (
            nextProps.authenticationState.type === prevState.authenticationState.type
            && nextProps.authenticationState.data?.loggedIn === prevState.authenticationState.data?.loggedIn
            && nextProps.location?.pathname === prevState.location?.pathname
        ) {
            console.log(prevState);
            return null;
        }

        return {
            data: nextProps.data,
            type: nextProps.type,
            location: nextProps.location,
            history: nextProps.history,
            match: nextProps.match,
            staticContext: nextProps.staticContext,
        }
    }

    componentDidMount(): void {
        const { retrieveAuthenticationFromStorage } = this.props;
        retrieveAuthenticationFromStorage();
    }

    render(): ReactNode {
        const { authenticationState, location } = this.state;
        console.log('pathname', location.pathname);
        if (authenticationState.type === CLEAR_TOKENS
            && !authenticationState.data.loggedIn
            && location.pathname !== '/login'
        ) {
            return (<Redirect to="/login" />)
        }

        return (<></>)
    }
}

const mapStateToProps = (state: RootStateOrAny, ownProps: any) => {
    return {
        authenticationState: state.authenticationState,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return  {
        retrieveAuthenticationFromStorage: () => dispatch(getAuthenticationFromStorage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));
