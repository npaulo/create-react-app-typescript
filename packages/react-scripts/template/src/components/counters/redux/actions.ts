import { createAction } from 'typesafe-actions';

// typesafe-actions: https://github.com/piotrwitek/typesafe-actions
// naming actions: @<componentname>/<action> e.g. @COUNTERS/INCREMENT
// export each action

export const increment = createAction('@counters/INCREMENT');

export const add =  createAction('@counters/ADD', resolve => {
    return (amount: number) => resolve(amount);
});