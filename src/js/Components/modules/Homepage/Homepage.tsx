import React, {Dispatch, ReactNode} from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import {createUser, getUser} from '../../../Redux/Actions/UserActions';
import { HomepageStateInterface, HomepagePropsInterface } from '.';
import {User} from "../../../Interfaces/Redux";

class Homepage extends React.Component<HomepagePropsInterface, HomepageStateInterface> {
    constructor(props: HomepagePropsInterface) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { getUserAction } = this.props;
        getUserAction(1);
    }

    static getDerivedStateFromProps(nextProps: HomepagePropsInterface, prevState: HomepageStateInterface): HomepageStateInterface {
        return {
            user: nextProps.user
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
                </header>
            </div>
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
        getUserAction: (userId: number) => dispatch(getUser(userId)),
        createUserAction: (user: User) => dispatch(createUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
