import React, { ReactNode } from 'react';
import '../../scss/App.scss';
import { connect } from 'react-redux';
import { AppPropsInterface } from './AppPropsInterface';
import UserActions from '../Redux/Actions/UserActions';
import { AppStateInterface } from './AppStateInterface';

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props);

    this.state = { user: props.user };
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
    const { firstName, lastName, emailAddress } = this.props.user;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello {firstName} {lastName}. This is your Email Address {emailAddress}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  user: state.user,
})

function mapDispatchToProps(dispatch: any) {
  return  {
    getUser: (userId: number) => dispatch(UserActions.getUser(userId))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
