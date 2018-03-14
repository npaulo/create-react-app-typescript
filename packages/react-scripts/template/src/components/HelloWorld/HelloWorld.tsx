import * as React from 'react';
import './HelloWorld.scss';

export interface Props {
    /**
     * Message to append to component
     */
    message?: string;
}

export interface State {
    index: number;
    fixedIndex: number;
    inverseIndex: number;
}

export default class HelloWorld extends React.Component<Props, State> {

    public static defaultProps: Props = {
        message: 'World'
    };

    render() {

        return (
            <div>
                Hello <span className="b-bold">{this.props.message}</span>
            </div>
        );
    }
}
