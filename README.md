PayPal-express-checkout-with-nodejs-express
===========================================

This code demonstatres that buyer can click PayPal Express Checkout button on Seller website, process payment via PayPal and return to Seller website with acknowledgement.

Package.json
Contains information about packages used  such as express, jade, PayPal SDK	
Config.jason
Contains parameters such as port, ip address,  PayPal security, PayPal client_id
App.js  
App.js is main files that creates server and routes requests
Routes.js  
Route.js holds details logic for following main paths
Route 1: Entry page to accept amount and submit using paypal express checkout button
Route: 2: Create callout to sandbox to process the payment
Route 3: Get confirmation from PayPal and display confirmation
Route 4: Get cancellation from PayPal and display cancellation
Route 5: Catch all errors and display error messages
Views
Index.jade
Main page that accepts amount, display checkout button 
Execute.jade
Confirmation page when payment complete
Cancel.jade
Cancellation page when process cancelled from paypal website
Error.Jade
Display errors occurred, if any
 
Free Resources from Web

http://nodejs.org/
http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
https://devblog.paypal.com/building-a-node-and-paypal-app/
https://devblog.paypal.com/building-a-web-app-with-node-js-the-paypal-sdk-part-2/
https://developer.paypal.com/docs/classic/express-checkout/integration-guide/ECGettingStarted/#idde509e1a-af2a-412a-b9ab-829b844986c5
http://html2jade.aaron-powell.com/
