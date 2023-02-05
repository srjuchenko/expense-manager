class Store {
  async getItems() {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem("expenses") ?? "[]";
      resolve(JSON.parse(item));
      return JSON.parse(item);
    });
  }
  async addItem(data) {
    return new Promise((resolve, reject) => {
      if (!data) {
        reject();
        return;
      }
      const items = this.getItems();
      items.push(data);
      localStorage.setItem("expenses", JSON.stringify(items));
      resolve();
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
  static A = new Category("A");
  static B = new Category("B");
  static C = new Category("C");

  constructor(name) {
    this.name = name;
  }
}

const store = new Store();
export default store;
