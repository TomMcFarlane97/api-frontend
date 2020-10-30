import React, { ReactNode } from 'react';
import Navigation from "../../Navigation/Navigation";

export default class Header extends React.Component<{}, {}>
{
    constructor(props: {}) {
        super(props);
    }

    render(): ReactNode {
        return (
            <header className="p-4">
                <Navigation />
            </header>
        );
    }
}
