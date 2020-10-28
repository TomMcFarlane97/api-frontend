import React, {Dispatch, ReactNode} from 'react';
import '../../scss/App.scss';
import {connect, RootStateOrAny} from 'react-redux';
import { AppPropsInterface } from './AppPropsInterface';
import UserActions from '../Redux/Actions/UserActions';
import { AppStateInterface } from './AppStateInterface';
import {User} from "../Interfaces/Redux";

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    const { getUser } = this.props;
    getUser(1);
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
            onClick={() => this.props.createUser(
                {
                  id: 3,
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
    getUser: (userId: number) => dispatch(UserActions.getUser(userId)),
    createUser: (user: User) => dispatch(UserActions.createUser(user)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
