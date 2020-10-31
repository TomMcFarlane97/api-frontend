import UserFormAction from "../../UserForm/UserFormAction";
import React, {ReactNode} from "react";

export default class SettingsPage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render(): ReactNode {
        console.log('loading settings');
        return (
            <UserFormAction />
        )
    }
}
