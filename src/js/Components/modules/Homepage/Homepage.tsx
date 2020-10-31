import React, {Dispatch, ReactNode} from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import {createUser, getUser} from '../../../Redux/Actions/UserActions';
import { HomepageStateInterface, HomepagePropsInterface } from '.';
import {User} from "../../../Interfaces/Redux";
import UserFormAction from "../../UserForm/UserFormAction";
import {USER_SUCCESS} from "../../../Redux/Actions/Types/UserActionTypes";

class Homepage extends React.Component<HomepagePropsInterface, HomepageStateInterface> {
    constructor(props: HomepagePropsInterface) {
        super(props);
        this.state = { user: props.userState.user };
    }

    componentDidMount(): void {
        const { getUserAction } = this.props;
        getUserAction(1);
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
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Hello {user?.firstName} {user?.lastName}. This is your Email Address {user?.emailAddress}
                    </p>
                    <button
                        className="App-link"
                        onClick={() => this.props.createUserAction(
                            {
                                firstName: 'Updated',
                                lastName: 'User',
                                emailAddress: 'updated.user@gmail.com',
                            } as User
                        )}
                    >
                        Create a new user
                    </button>

                    <UserFormAction />
                </header>
            </div>
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
        getUserAction: (userId: number) => dispatch(getUser(userId)),
        createUserAction: (user: User) => dispatch(createUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
