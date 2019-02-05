import delay from './delay';

const users = [{
    id: 1, 
    firstName: 'Chuck',
    lastName: 'Russell',
    avatarUrl: ''
},{
    id: 2, 
    firstName: 'Cass',
    lastName: 'Russell',
    avatarUrl: ''
}];

class UserApi {

    static getAllUsers(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(users)
            }, delay);
        });
    }
}

export default UserApi;