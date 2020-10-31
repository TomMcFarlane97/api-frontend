import React, {ReactNode} from "react";

class LoadingRequest extends React.Component<{}, { isLoading: boolean }> {
    constructor(props: {}) {
        super(props);

        this.state = { isLoading: true };
    }

    render(): ReactNode {
        const { isLoading } = this.state;
        return (
            <div>
                <div className="spinner-grow text-light" role="status" hidden={!isLoading}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default LoadingRequest;
