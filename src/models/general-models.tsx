export interface PostData {
    _id: string,
    user_id: string,
    full_name: string,
    post_input: string,
    created_at_standart: string,
    created_at_timestamp: number
}

export interface User {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    full_name: string,
    created_at: string
};



