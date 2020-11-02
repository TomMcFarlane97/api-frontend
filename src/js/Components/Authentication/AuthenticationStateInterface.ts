import {AuthenticationState} from "../../Interfaces/Redux";
import {RouteComponentProps} from "react-router";

export interface AuthenticationStateInterface extends RouteComponentProps {
    authenticationState: AuthenticationState;
}
