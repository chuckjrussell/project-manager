import delay from '../delay';

const categories = [{
    id: '1',
    name: 'Decorations',
    items: [{
            id: '1',
            name: 'Lorem Ipsum',
            paid: 100,	
            discount: 100,
            deposit: 100,
            refundableDeposit: 100,	
            totalCost: 100
        },{
            id: '2',
            name: 'Sed Dolor',
            paid: 100,	
            discount: 100,
            deposit: 100,
            refundableDeposit: 100,	
            totalCost: 100
        }
    ]
},{
    id: '2',
    name: 'Venue',
    items: [{
            id: '3',
            name: 'Lorem Ipsum',
            paid: 100,	
            discount: 100,
            deposit: 100,
            refundableDeposit: 100,	
            totalCost: 100
        },{
            id: '4',
            name: 'Sed Dolor',
            paid: 100,	
            discount: 100,
            deposit: 100,
            refundableDeposit: 100,	
            totalCost: 100
        }
    ]
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

    static saveCategory(category){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( category.title.length < 1 ){
                    reject('Categories must have a non-empty title.');
                }

                if( category.id ){
                    var categoryIndex = category.findIndex(t => t.id === category.id);
                    categories.splice(categoryIndex, 1, category);
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