class Payment {
  constructor(valuePortion, payDate, dueDate) {
    this.vp = valuePortion;
    this.dd = new Date(dueDate);
    this.pd = new Date(payDate);
  }

  receipt() {
    if (this.pd > this.dd) {
      const timeDiff = Math.abs(this.pd.getTime() - this.dd.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return this.vp + (diffDays * 1.5);
    } else {
      return this.vp;
    }
  }
}

module.exports = Payment;
