import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
export class Payment {

  client: string;
  detail: string;
  amount: number;

  constructor(client: string, detail: string, amount: number) {
    this.client = client;
    this.detail = detail;
    this.amount = amount;
  }

  format() {
    return `${this.client} pays $${this.amount} for ${this.detail}`;
  }
}