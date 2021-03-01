"use strict";
// Classes
var Invoice = /** @class */ (function () {
    // readonly client: string; //hanya bisa diread
    // private details: string; //hanya bisa diakses di dalam class
    // public amount: number; //bebas
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Mario', 'work on Mario Website', 200);
var invTwo = new Invoice('Luigi', 'work on Luigi Website', 400);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
