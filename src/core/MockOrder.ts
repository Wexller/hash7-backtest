export default class MockOrder {
  symbol: string;
  type: string;
  side: string;
  amount: number;
  price: number;
  status: string;
  filled: number;

  constructor(
    symbol: string,
    type: string,
    side: string,
    amount: number,
    price: number,
  ) {
    this.symbol = symbol;
    this.type = type;
    this.side = side;
    this.amount = amount;
    this.price = price;
    this.status = 'open';
    this.filled = 0;
  }

  fill(amount: number) {
    this.filled += amount;

    if (this.filled >= this.amount) {
      this.status = 'closed';
    }
  }
}
