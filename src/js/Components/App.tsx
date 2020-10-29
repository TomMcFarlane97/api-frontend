import React, {Dispatch, ReactNode} from 'react';
import '../../scss/App.scss';
import {connect, RootStateOrAny} from 'react-redux';
import { AppPropsInterface } from './AppPropsInterface';
import {createUser, getUser} from '../Redux/Actions/UserActions';
import { AppStateInterface } from './AppStateInterface';
import {User} from "../Interfaces/Redux";

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    const { getUserAction } = this.props;
    getUserAction(1);
  }

  static getDerivedStateFromProps(nextProps: AppPropsInterface, prevState: AppStateInterface): AppStateInterface {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
