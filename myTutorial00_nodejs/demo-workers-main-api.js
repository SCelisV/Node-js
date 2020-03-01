// OJO - It's no good tested... maybe I didn't understand


// Web Worker is a Web API. https://developer.mozilla.org/en-US/docs/Web/API/Worker
// This means that a Worker can’t access or manipulate the DOMs at all. 
// Workers live in a totally different thread, it never bothers the main thread. 
// What it can do is receive a message from where a new Worker is created and a message is sent to it.


// main.js
worker.addEventListener('message', event => {
    console.log(event.data);
});