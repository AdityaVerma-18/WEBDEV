// -----------------------------
// Type Narrowing in TypeScript
// -----------------------------

// typeof narrowing
function burger(kind: string | number) {
  // checks if value is a string
  if (typeof kind === "string") {
    return `Type of burger: ${kind}`;
  }

  // remaining type is number
  return `Burger quantity: ${kind}`;
}

// optional parameter
function serveBurger(msg?: string) {
  // checks if argument exists
  if (msg) {
    return `Serving ${msg}`;
  }

  // default response
  return "Serving normal burger";
}

// literal type narrowing
function orderBurger(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Small burger";
  }

  if (size === "medium" || size === "large") {
    return "Extra burger";
  }

  // remaining type is number
  return `Burger no. ${size}`;
}

// -----------------------------
// instanceof narrowing
// -----------------------------

class KulhadChai {
  serve() {
    return "Serving Kulhad Chai";
  }
}

class Cutting {
  serve() {
    return "Serving Cutting Chai";
  }
}

function serve(chai: KulhadChai | Cutting) {
  // checks object's class
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }

  return chai.serve();
}

// -----------------------------
// User Defined Type Guard
// -----------------------------

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  // validates object structure
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  // custom type guard
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }

  // remaining type is string
  return `Serving custom chai: ${item}`;
}

// -----------------------------
// Discriminated Union
// -----------------------------

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  // narrows using common literal property
  switch (order.type) {
    case "masala":
      return `Masala chai | Spice: ${order.spiceLevel}`;

    case "ginger":
      return `Ginger chai | Amount: ${order.amount}`;

    case "elaichi":
      return `Elaichi chai | Aroma: ${order.aroma}`;
  }
}

// -----------------------------
// in Operator Narrowing
// -----------------------------

function brew(order: MasalaChai | GingerChai) {
  // checks if property exists
  if ("spiceLevel" in order) {
    return `Masala chai with spice level ${order.spiceLevel}`;
  }

  return `Ginger chai with amount ${order.amount}`;
}

// -----------------------------
// Array Type Guard
// -----------------------------

function isStringArray(arr: unknown): arr is string[] {
  // checks if every element is string
  return (
    Array.isArray(arr) &&
    arr.every((item) => typeof item === "string")
  );
}