import {AuthenticationState} from "../../Interfaces/Redux";
import {RouteComponentProps} from "react-router";

export interface AuthenticationPropsInterface extends RouteComponentProps {
    authenticationState: AuthenticationState;
    retrieveAuthenticationFromStorage(): void;
}
