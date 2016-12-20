# SequenceManager

This a an example app for Managing sequences and their publish histories.

Sequences and shots are commonly used in the animation and movie making, a single sequence comprises of multiple shots. And a shot can have multiple publish histories.

The app can be used to manage those publish histories in an aesthetically pleasing way.

The app uses json api's to communicate with the server by creating services for each of the particular models on the backend. 

For backend I have made a rails api server with rails json-api.

For security I have implemented jwt tokens so that only logged in users can access the api publish data.