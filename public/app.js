import { Invoice } from './modules/invoice.js';
import { Payment } from './modules/payment.js';
import { ListTemplate } from './modules/listTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice'
        ? doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        : doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
