import * as React from 'react';

export interface CountersProps {
    label: string;
    count: number;
    onIncrement: () => void;
}

export const Counters: React.SFC<CountersProps> = (props) => {
    const { label, count, onIncrement } = props;

    const handleIncrement = () => { onIncrement(); };

    return (
        <div>
            <span>{label}: {count} </span>
            <button type="button" onClick={handleIncrement}>
                {`Increment`}
            </button>
        </div>
    );
};
