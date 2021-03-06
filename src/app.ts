// Classes
class Invoice {
    // readonly client: string; //hanya bisa diread
    // private details: string; //hanya bisa diakses di dalam class
    // public amount: number; //bebas

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Mario', 'work on Mario Website', 200);
const invTwo = new Invoice('Luigi', 'work on Luigi Website', 400);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
