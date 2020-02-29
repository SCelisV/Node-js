
const events = require('events');
const eventEmitter = new events.EventEmitter(); // assign event handlers to your own events with the EventEmitter object.

// Create an event handler: - crea el manejador de eventos
const myEventHandler = () => { // that will be executed when a "scream" event is lanzado
    console.log('I hear a scream!'); //
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler); 

// Fire the 'scream' event: To lanzar an event se usa emit() method.
eventEmitter.emit('scream');

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_eventemitter.js 
// 2. En la consola aparece: I hear a scream!
