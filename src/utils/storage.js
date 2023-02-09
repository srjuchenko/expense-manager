/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
class Storage {
  async getItems() {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem("expenses") ?? "[]";
      resolve(JSON.parse(item));
    });
  }
  async addItem(data) {
    const title = data.title;
    const cost = data.cost;
    const date = data.date;
    const category = data.category;

    return new Promise(async (resolve, reject) => {
      if (!data) {
        reject();
        return;
      }
      const items = await this.getItems();
      items.unshift({ title, cost, category, date });
      localStorage.setItem("expenses", JSON.stringify(items));
      resolve();
    });
  }
}

export class Data {
  #title;
  #cost;
  #date;
  #category;
  constructor(title, cost, date, category) {
    this.title = title;
    this.cost = cost;
    this.date = date;
    this.category = category;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get cost() {
    return this.#cost;
  }

  set cost(cost) {
    this.#cost = cost;
  }

  get date() {
    return this.#date;
  }

  set date(date) {
    this.#date = date;
  }

  get category() {
    return this.#category;
  }

  set category(category) {
    this.#category = category;
  }
}

const storage = new Storage();
export default storage;
