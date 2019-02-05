import delay from './delay';

const statuses = [{
    id: 1, 
    status: "In Progress"
},{
    id: 2, 
    status: "Blocked"
},{
    id: 3, 
    status: "To Do"
},{
    id: 4, 
    status: "Done"
}];

class StatusApi {

    static getAllStatuses(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(statuses)
            }, delay);
        });
    }
}

export default StatusApi;