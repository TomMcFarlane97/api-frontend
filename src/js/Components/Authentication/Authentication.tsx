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
            type: props.type,
            data: props.data,
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
            nextProps.type === prevState.type
            && nextProps.data?.loggedIn === prevState.data?.loggedIn
            && nextProps.location?.pathname === prevState.location?.pathname
        ) {
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
        const { type, data, location } = this.state;
        if (type === CLEAR_TOKENS
            && !data.loggedIn
            && location.pathname !== '/login'
        ) {
            return (<Redirect to="/login" />)
        }

        return (<></>)
    }
}

const mapStateToProps = (state: RootStateOrAny, ownProps: any) => {
    return {
        type: state.authenticationState.type,
        data: state.authenticationState.data,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return  {
        retrieveAuthenticationFromStorage: () => dispatch(getAuthenticationFromStorage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));
