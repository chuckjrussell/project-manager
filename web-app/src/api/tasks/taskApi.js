import delay from './delay';

const tasks = [{
    id: "1", 
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 
    dueDate: "11-8-2018", 
    assignee: "1", 
    category: "2", 
    status: "1"
  },{
    id: "2",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem", 
    description: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", 
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