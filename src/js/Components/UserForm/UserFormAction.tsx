import React, {Dispatch, ReactNode} from "react";
import {UserFormActionPropsInterface, UserFormActionStateInterface} from "./index";
import UserForm from "./UserForm";
import {User} from "../../Interfaces/Redux";
import {connect, RootStateOrAny} from "react-redux";
import {createUser, updateUser} from "../../Redux/Actions/UserActions";

class UserFormAction extends React.Component<UserFormActionPropsInterface, UserFormActionStateInterface> {
    constructor(props: UserFormActionPropsInterface) {
        super(props);

        this.submitUserData = this.submitUserData.bind(this);
        this.state = { user: props.user };
    }

    static getDerivedStateFromProps(
        nextProps: UserFormActionPropsInterface,
        prevState: UserFormActionStateInterface
    ): UserFormActionStateInterface {
        return {
            ...prevState,
            user: nextProps.user,
        }
    }

    submitUserData(user?: User): void {
        if (!user) {
            return;
        }
        if (user?.id) {
            console.log(user.firstName);
            this.props.updateUserAction(user);
            return;
        }
        this.props.createUserAction(user);
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
        user: state.user,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return  {
        createUserAction: (user: User) => dispatch(createUser(user)),
        updateUserAction: (user: User) => dispatch(updateUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormAction);
