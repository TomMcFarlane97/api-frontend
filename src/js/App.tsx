import React, { ReactNode } from 'react';
import '../scss/App.scss';

export default class App extends React.Component<{}, { name: string}>
{
  constructor(props: any) {
    super(props);

    this.state = { name: 'tom' };
  }

  render(): ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> I have reloaded
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
