import delay from './delay';

const tasks = [{
    id: 1, 
    description: "Duis aute irure dolor in reprehenderit", 
    dueDate: "11-8-2018", 
    assignee: "1", 
    category: "2", 
    status: "1"
  },{
    id: 2, 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
    dueDate: "11-8-2018", 
    assignee: "2", 
    category: "2", 
    status: "3"
  }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  
  //This would be performed on the server in a real app. Just stubbing in.
  const generateId = (task) => {
    return replaceAll(task.title, ' ', '-');
  };

class TaskApi {

    static getAllTasks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tasks)
            }, delay);
        });
    }

    static saveTask(task){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( task.title.length < 1 ){
                    reject('Tasks must have a non-empty title.');
                }

                if( task.id ){
                    var taskIndex = tasks.findIndex(t => t.id === task.id);
                    tasks.splice(taskIndex, 1, task);
                }
                else {
                    task.id = generateId(task);
                    tasks.push(task);
                }

                resolve(task);

            }, delay);
        });
    }
}

export default TaskApi;