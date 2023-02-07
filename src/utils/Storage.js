class Store {
  async getItems() {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem("expenses") ?? "[]";
      resolve(JSON.parse(item));
      return JSON.parse(item);
    });
  }
  async addItem(data) {
    return new Promise(async (resolve, reject) => {
      if (!data) {
        reject();
        return;
      }
      const items = await this.getItems();
      items.unshift(data);
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

export const categories = ["Food", "Car", "Bills", "Clothes", "Pets"];

const store = new Store();
export default store;
