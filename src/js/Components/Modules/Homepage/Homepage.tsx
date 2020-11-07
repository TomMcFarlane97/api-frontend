import React, {Dispatch, ReactNode} from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import {createUserAction, getUserAction} from '../../../Redux/Actions/UserActions';
import { HomepageStateInterface, HomepagePropsInterface } from '.';
import {User} from "../../../Interfaces/Redux";
import {USER_SUCCESS} from "../../../Constants/ActionTypes/UserActionTypes";

class Homepage extends React.Component<HomepagePropsInterface, HomepageStateInterface> {
    constructor(props: HomepagePropsInterface) {
        super(props);
        this.state = { user: props.userState.user };
    }

    componentDidMount(): void {
        const { getUserAction } = this.props;
        const { user } = this.state;
        if (user.id) {
            return;
        }
        getUserAction();
    }

    static getDerivedStateFromProps(
        nextProps: HomepagePropsInterface,
        prevState: HomepageStateInterface
    ): null|HomepageStateInterface {
        if (nextProps.userState.type !== USER_SUCCESS) {
            return null;
        }

        return {
            user: nextProps.userState.user
        }
    }

    render(): ReactNode {
        const { user } = this.state;
        if (!user.id) {
            return (<p>There is no user</p>);
        }
        return (
            <p>
                Hello {user?.firstName} {user?.lastName}. This is your Email Address {user?.emailAddress}
            </p>
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
        getUserAction: () => dispatch(getUserAction()),
        createUserAction: (user: User) => dispatch(createUserAction(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
