var paypal = require('paypal-rest-sdk');
var config = {};
 
/*
 * GET home page.
 */
 
exports.create = function(req, res){
  
   res.render('create', { title: 'Express' });
   var payment = ...
  paypal.payment.create(payment, function (error, payment) {
  if (error) {
    console.log(error);
  } else {
    if(payment.payer.payment_method === 'paypal') {
      req.session.paymentId = payment.id;
      var redirectUrl;
      for(var i=0; i < payment.links.length; i++) {
        var link = payment.links[i];
        if (link.method === 'REDIRECT') {
          redirectUrl = link.href;
        }
      }
      res.redirect(redirectUrl);
    }
  }
});

}
 
/*
 * SDK configuration
 */
 
exports.init = function(c){
  config = c;
  paypal.configure(c.api);
}

