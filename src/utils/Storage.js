class Store {
    name
    constructor(name) {
        this.name = name;
    }

    async getItems() {
        return new Promise((resolve, reject) => {
            const item = localStorage.getItem(this.name) ?? "[]";
            resolve(JSON.parse(item));
        })
    }
    async addItem(data) {
        return new Promise((resolve, reject) => {
            if (!data || !this.name){
                reject()
                return;
            }
            const items = this.getItems()
            items.push(data)
            localStorage.setItem(this.name, JSON.stringify(items));
            resolve()
        });
    }
}

export class Data {
    title;
    cost;
    date;
    category;
    constructor(title, cost, date, category) {
        this.title = title;
        this.cost = cost;
        this.date = date;
        this.category = category;
    }
}

export class Category {
    static A = new Category("A")
    static B = new Category("B")
    static C = new Category("C")
    
    constructor(name) {
        this.name = name
    }
}


export default new Store("expenses")