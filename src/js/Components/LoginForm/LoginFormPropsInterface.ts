export interface LoginFormPropsInterface {
    showLogin: boolean;
    handleLoginClick(event?: MouseEvent): void;
    loginUser(emailAddress: string): void
}
