const Payment = require('../../index');

test('Retorna o valor original da parcela, caso o usuario realize o pagamento antes do prazo', () => {
  const payment = new Payment(180, '8/15/2020', '8/18/2020');

  expect(payment.receipt()).toBe(180);
});

test('Retorna o valor original da parcela, caso o usuario realize o pagamento no prazo', () => {
  const payment = new Payment(100, '8/15/2020', '8/15/2020');

  expect(payment.receipt()).toBe(100);
});

test('Retorna o valor da parcela acrescido com as multas, caso o usuario realize o pagamento depois do prazo', () => {
  const payment = new Payment(50, '8/18/2020', '8/15/2020');

  expect(payment.receipt()).toBe(50 + (1.5 * 3));
});
