# Pulse 

Code for *Pulse*, a realtime visualization of my heartbeat. 


## Parts  
- [Polar T31 Transmitter](http://www.polar.com/us-en/products/accessories/T31_coded_Transmitter)
- [Polar Heart Rate Monitor Interface](https://www.sparkfun.com/products/8661)
- Arduino Uno 
- One server for sending values from the Arduino, another for receiving heartrate data and displaying realtime d3 visualization*

*Ideal/future versions of this project would use an Arduino Yun or external/cloud server. Because of time constraints, I just used two laptops. 

## Piece Description
In *Pulse*, heart rate data is collected in real-time, then visually and publicly broadcast. Using personal interaction as an interface, Pulse questions the ability of biometric data to reveal, clarify, obscure, and intrude. 

Shown at [Data & Society Reception](https://www.eventbrite.com/e/data-society-reception-registration-24784612443), May 17 2016. 

## Notes and Thanks
[This](http://bildr.org/2011/08/heartrate-arduino/) tutorial was super instrumental.  

Still need to amend the server.js file.  

Special thanks to [Myk Bilokonsky](https://twitter.com/mykola) for Javascript help.