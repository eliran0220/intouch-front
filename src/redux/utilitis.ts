import reducers from './combined-reducers';
export const initialState = {
    email: "",
    first_name: "",
    last_name: ""
};

export type State = ReturnType<typeof reducers>