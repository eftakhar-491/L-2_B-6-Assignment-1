type FormatValue = number | string | boolean;

function formatValue(val: FormatValue): FormatValue | undefined {
  if (typeof val === "number") {
    return val * 10;
  }
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  if (typeof val === "boolean") {
    return !val;
  }
}

type LengthValue = string | any[];

function getLength(val: LengthValue): number | undefined {
  if (typeof val === "string" || Array.isArray(val)) {
    return val.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book) {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
}

// type TUniqueArray = number | string;

type TVisited = { [key: string]: boolean };

function getUniqueValues(arr1: number[], arr2: number[]): number[];

function getUniqueValues(arr1: string[], arr2: string[]): string[];

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];
  const visited: TVisited = {};
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    const key = String(value);

    if (!visited[key]) {
      visited[key] = true;
      result[result.length] = value;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    const key = String(value);

    if (!visited[key]) {
      visited[key] = true;
      result[result.length] = value;
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products
    .map((product) => {
      const baseTotal = product.price * product.quantity;

      if (
        product?.discount &&
        product.discount > 0 &&
        product.discount <= 100
      ) {
        const discountAmount = (baseTotal * product.discount) / 100;
        return baseTotal - discountAmount;
      }

      return baseTotal;
    })
    .reduce((sum, current) => sum + current, 0);
}
