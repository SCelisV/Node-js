


// OJO - It's no good tested... maybe I didn't understand

// Web Worker is a Web API. https://developer.mozilla.org/en-US/docs/Web/API/Worker
// This means that a Worker can’t access or manipulate the DOMs at all. 
// Workers live in a totally different thread, it never bothers the main thread. 
// What it can do is receive a message from where a new Worker is created and a message is sent to it.

let worker;
if ('Worker' in window) {
  worker = new Worker('/demo-workers-api.js'); // takes the string or URL as the first parameter. It usually should be the file name 
}

worker.postMessage('From Main Thread'); // send a message to the other side of the thread.

this.addEventListener('message', event => {
    console.log(event.data);
});

// let’s order the worker to send another message to the main thread as soon as it receives a message from the main.
this.addEventListener('message', event => {
  console.log(event.data);
  this.postMessage('From Worker Thread');
});