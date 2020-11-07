export interface LoginPagePropsInterface {
    loggedIn: boolean;
    loginUserAction(emailAddress: string): void;
}
