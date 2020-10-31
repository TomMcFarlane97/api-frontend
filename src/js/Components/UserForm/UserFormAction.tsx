import React, {Dispatch, ReactNode} from "react";
import {UserFormActionPropsInterface, UserFormActionStateInterface} from "./index";
import UserForm from "./UserForm";
import {User} from "../../Interfaces/Redux";
import {connect, RootStateOrAny} from "react-redux";
import {createUser, updateUser} from "../../Redux/Actions/UserActions";
import {USER_SUCCESS} from "../../Constants/ActionTypes/UserActionTypes";

class UserFormAction extends React.Component<UserFormActionPropsInterface, UserFormActionStateInterface> {
    constructor(props: UserFormActionPropsInterface) {
        super(props);

        this.submitUserData = this.submitUserData.bind(this);
        this.state = { user: props.userState.user };
    }

    static getDerivedStateFromProps(
        nextProps: UserFormActionPropsInterface,
        prevState: UserFormActionStateInterface
    ): null|UserFormActionStateInterface {
        if (nextProps.userState.type !== USER_SUCCESS) {
            return null;
        }
        return {
            ...prevState,
            user: nextProps.userState.user,
        }
    }

    submitUserData(user?: User): void {
        if (!user) {
            return;
        }
        const { updateUserAction, createUserAction } = this.props;
        if (user?.id) {
            updateUserAction(user);
            return;
        }
        createUserAction(user);
    }

    render(): ReactNode {
        const { user } = this.state;
        return (
            <UserForm user={user} submitUserData={this.submitUserData} />
        );
    }
}

const mapStateToProps = (state: RootStateOrAny, ownProps: any) => {
    return {
        userState: state.userState,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return  {
        createUserAction: (user: User) => dispatch(createUser(user)),
        updateUserAction: (user: User) => dispatch(updateUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormAction);
