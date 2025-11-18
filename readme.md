# 📝 Differentce beetween any, unknown, and never in TypeScript

- TypeScript gives us powerful type-safety features, and three of the most misunderstood types are any, unknown, and never. Even though they seem similar, each exists for a completely different purpose.

### 🔹 What is any?

- any tells TypeScript to turn off all type checking for that variable. It means: “I don’t care what the type is — allow everything."

### ✔ Example (using any)

```
let value: any;

value = 10;
value = "Hello";
value = true;

value.toUpperCase(); // No error, even if value is not a string
```

❗ Drawback

Using any removes type safety and can cause runtime errors.

### 🔹 What is unknown?

- unknown is like a safer version of any. It means: “This value can be anything, but you must check the type before using it.”

✔ Example (using unknown)

```
let value: unknown;

value = 10;
value = "Hello";

value.toUpperCase(); // ❌ ERROR: Type is unknown

if (typeof value === "string") {
value.toUpperCase(); // ✔ Safe after checking
}
```

✔ Benefit

It forces you to validate the type → safer than any.

### 🔹 What is never?

- never represents a value that should never happen. A function returning never will not return at all.

Common cases:

A function that always throws an error

A function that never finishes (infinite loop)

A switch statement with exhaustive type checking

✔ Example (using never)

```
function throwError(message: string): never {
throw new Error(message); // Never returns
}

function infiniteLoop(): never {
while (true) {} // Runs forever
}
```

## 🔥 Differences Between `any`, `unknown`, and `never`

| Type      | Meaning                  | Usage                 | Safety Level    |
| --------- | ------------------------ | --------------------- | --------------- |
| `any`     | Any type, no checking    | Disable type checking | 🚨 Low (unsafe) |
| `unknown` | Any type, but must check | Safe unknown values   | ✅ High         |
| `never`   | No value possible        | Impossible cases      | 🛡 Very High     |

```
let a: any = "hello";
a = 123;
a = false;
a.trim(); // No error

unknown – must check
let u: unknown = "hello";

u.trim(); // ❌ ERROR

if (typeof u === "string") {
u.trim(); // ✔ Safe
}

never – function never returns
function crash(): never {
throw new Error("Crash!");
}

function checkType(value: string | number) {
if (typeof value === "string") {
return value.toUpperCase();
}
if (typeof value === "number") {
return value \* 2;
}

// If TypeScript finds a type not handled above → it becomes never
const unexpected: never = value; // ❌ Compile-time error
}
```

# 📌 Summary

### any

- Turns off type checking

- Flexible but unsafe

- Use only when needed

### unknown

- Similar to any, but forces type-checking

- Safer and recommended over any

### never

- Represents something that never occurs

- Used in error functions and exhaustive checks

<hr>

<br><br>

# 📝 Union and Intersection Types in TypeScript

TypeScript provides powerful ways to combine types. Two of the most important are Union Types (|) and Intersection Types (&).
They allow you to create flexible yet strongly typed structures.

This article explains:

✅ What are union types

✅ What are intersection types

✅ Syntax examples

✅ Differences between union and intersection

✅ Code examples

✅ Summary

### 🔹 What Are Union Types?

- A union type means a value can be one type OR another type. It is written using the | operator.

✔ Example (Union Type)

```
let value: string | number;

value = "Hello"; // ✔ valid
value = 42; // ✔ valid
value = true; // ❌ Error: boolean not allowed
```

❗ Drawback
Union types are useful when a value has multiple possible forms.

### 🔹 What Are Intersection Types?

An intersection type means a value must be all types at the same time.
It is written using the & operator.

✔ Example (Intersection Type)

```
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
name: "Eftakhar",
employeeId: 101,
};
```

Intersection types merge the properties of multiple types → forming a new, combined type.

# 🔥 Top 5 Differences Between Union and Intersection Types

---

| Feature                 | **Union (`A \| B`)**                             | **Intersection (`A & B`)**                         |
| ----------------------- | ------------------------------------------------ | -------------------------------------------------- |
| **1. Meaning**          | A value can be **either A or B**                 | A value must be **both A and B**                   |
| **2. Flexibility**      | More flexible → accepts multiple types           | More strict → must satisfy all types               |
| **3. Result Type**      | Combines options from A **or** B                 | Merges properties of A **and** B                   |
| **4. Type Safety**      | Requires type-checking before using properties   | All required properties always exist               |
| **5. Common Use Cases** | Multiple possible function inputs, API responses | Composing models, mixins, extending multiple types |

---

✔ Code Examples Showing Differences

Union Example – flexible input

```
function printId(id: string | number) {
console.log("Your ID is:", id);
}

printId(100); // ✔ number
printId("abc123"); // ✔ string
```

Intersection Example – combine multiple types

```
type HasEmail = { email: string };
type HasPhone = { phone: string };

type ContactInfo = HasEmail & HasPhone;

const contact: ContactInfo = {
email: "user@example.com",
phone: "+880123456789",
};

Union vs Intersection
type A = { a: number };
type B = { b: string };

let u: A | B; // either type A OR type B
u = { a: 10 };
u = { b: "text" };

let i: A & B; // must have BOTH
i = { a: 10, b: "text" };
```

### 📌 Summary

- Union (|)

-- A value can be one type OR another

-- Great for flexible API inputs or parameter options

- Intersection (&)

-- A value must satisfy multiple types at once

-- Useful for combining interfaces and building complex structures
