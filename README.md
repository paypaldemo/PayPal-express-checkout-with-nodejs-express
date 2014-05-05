PayPal-express-checkout-with-nodejs-express
===========================================

This code demonstatres that buyer can click PayPal Express Checkout button on Seller website, process payment via PayPal and return to Seller website with acknowledgement.

Package.json : Contains information about packages used  such as express, jade, PayPal SDK	
<br/>Config.jason :Contains parameters such as port, ip address,  PayPal security, PayPal client_id
<br/>App.js  : App.js is main files that creates server and routes requests
<br/>Routes.js : Route.js holds details logic for following main paths
<br/>  -> Route 1: Entry page to accept amount and submit using paypal express checkout button
<br/>  -> Route: 2: Create callout to sandbox to process the payment
<br/>  -> Route 3: Get confirmation from PayPal and display confirmation
<br/>  -> Route 4: Get cancellation from PayPal and display cancellation
<br/>  -> Route 5: Catch all errors and display error messages
<br/><br/>Views
<br/>  -> Layout.jade : Temaplate for all Jade pages
<br/>  -> Index.jade : Main page that accepts amount, display checkout button 
<br/>  -> Execute.jade : Confirmation page when payment complete
<br/>  -> Cancel.jade : Cancellation page when process cancelled from paypal website
<br/>  -> Error.Jade : Display errors occurred, if any
 
<br/>   <br/>Free Resources from Web
<br/>   http://nodejs.org/
<br/>   http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
<br/>   https://devblog.paypal.com/building-a-node-and-paypal-app/
<br/>   https://devblog.paypal.com/building-a-web-app-with-node-js-the-paypal-sdk-part-2/
<br/>   https://developer.paypal.com/docs/classic/express-checkout/integration-guide/ECGettingStarted/#idde509e1a-af2a-412a-b9ab-829b844986c5
<br/>   http://html2jade.aaron-powell.com/
