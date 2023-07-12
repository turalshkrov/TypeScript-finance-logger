// Classes
export class Payment {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} pays $${this.amount} for ${this.detail}`;
    }
}
