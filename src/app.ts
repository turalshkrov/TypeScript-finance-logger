import { Invoice } from './modules/invoice.js';
import { Payment } from './modules/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './modules/listTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form?.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  type.value === 'invoice' 
    ? doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    : doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)

  list.render(doc, type.value, 'end');
})