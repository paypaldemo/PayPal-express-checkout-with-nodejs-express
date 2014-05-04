var payment = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "number": "5500005555555559",
        "type": "mastercard",
        "expire_month": 12,
        "expire_year": 2018,
        "cvv2": 111,
        "first_name": "Joe",
        "last_name": "Shopper"
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "5.00",
      "currency": "USD"
    },
    "description": "My awesome payment"
  }]
};
