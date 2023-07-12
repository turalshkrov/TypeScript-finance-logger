import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
export class Invoice {

  client: string;
  detail: string;
  amount: number;

  constructor(client: string, detail: string, amount: number) {
    this.client = client;
    this.detail = detail;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.detail}`;
  }
}