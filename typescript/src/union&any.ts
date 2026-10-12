// union types
let age: number | string = '1M'

// only these values are allowed
let apireqstatus: 'pending' | 'sucess' | 'error' = 'pending'

// ❌ apireqstatus = 'done' is invalid

// array of order IDs
const orders = ['12', '20', '28', '42']

// may contain a string or remain undefined
let currentorder: string | undefined;

// loop through all orders
for (let order of orders) {

    // stop when order is found
    if (order == '28') {
        currentorder = order
        break
    }
}

// print the found order
console.log(currentorder);