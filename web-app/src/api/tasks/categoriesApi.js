import delay from './delay';

const categories = [{
    id: 1, 
    title: "Photography",
  },{
    id: 2, 
    title: "Decorations"
  },{
    id: 3, 
    title: "Invites"
  },{
    id: 4, 
    title: "Ceremony"
  },{
    id: 5, 
    title: "Schedule"
  }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  
  //This would be performed on the server in a real app. Just stubbing in.
  const generateId = (task) => {
    return replaceAll(task.title, ' ', '-');
  };

class CategoriesApi {

    static getAllCategories(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categories)
            }, delay);
        });
    }

    static saveCategories(category){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( category.title.length < 1 ){
                    reject('Tasks must have a non-empty title.');
                }

                if( category.id ){
                    var taskIndex = category.findIndex(t => t.id === category.id);
                    categories.splice(taskIndex, 1, category);
                }
                else {
                    category.id = generateId(category);
                    categories.push(category);
                }

                resolve(category);

            }, delay);
        });
    }
}

export default CategoriesApi;