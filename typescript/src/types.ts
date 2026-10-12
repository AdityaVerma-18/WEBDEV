// Type Inference
// TypeScript automatically figures out the variable type.

let name = "kirmada"; // inferred as string
let age = Math.random() > 0.5 ? 10 : 5; // inferred as number

// ❌ Error: cannot assign a string to a number variable
// age = "ten";


// Type Annotation
// We explicitly tell TypeScript what the type should be.

let chaiFlavour: string = "masala chai";
chaiFlavour = "ginger tea"; // ✅ allowed (string)

// ❌ Error: number is not assignable to string
// chaiFlavour = 10;




