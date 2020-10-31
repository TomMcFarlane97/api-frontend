import React, {ReactNode} from "react";
import {connect, RootStateOrAny} from "react-redux";
import {LoadingRequestStateInterface} from "./LoadingRequestStateInterface";
import {LoadingRequestPropsInterface} from "./LoadingRequestPropsInterface";

class LoadingRequest extends React.Component<LoadingRequestPropsInterface, LoadingRequestStateInterface> {
    constructor(props: LoadingRequestPropsInterface) {
        super(props);
        this.state = { isLoading: false };
    }

    static getDerivedStateFromProps(
        nextProps: LoadingRequestPropsInterface,
        prevState: LoadingRequestStateInterface
    ): null|LoadingRequestStateInterface {
        if (nextProps.isLoading === prevState.isLoading) {
            return null;
        }

        return {
            isLoading: nextProps.isLoading
        }
    }

    render(): ReactNode {
        const { isLoading } = this.state;

        if (!isLoading) {
            return (<></>);
        }

        return (
            <div className="loading loading-overlay">
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateOrAny, ownProps: any) => {
    return {
        isLoading: state.loadingState.loading,
    }
};

export default connect(mapStateToProps, null)(LoadingRequest);
