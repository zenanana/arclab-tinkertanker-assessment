Coding Assessment for ArcLab/Tinkertanker internship

Instructions are as below:

1. /hello - send back the plaintext "hello, banana!"
2. /stopwatch - display a rudimentary stopwatch that counts up from when the page is loaded, and provide a reset button that resets the counter to 0
3. /hello?name={0} - send back the plaintext "hello, {0}" (e.g. if your application is hosted at 18.247.0.78, going to http://18.247.0.78/hello?name=steven should return "hello, steven"
4. /hello/{0} - send back with the plaintext "hello, {0}" (e.g. if your application is hosted at 18.247.0.78, going to http://18.247.0.78/hello/steven should return "hello, steven"
5. /isprime/{0} - return text "yes" if the number {0} is a prime number, and "no" otherwise.
6. /previous_number/{0} - return the previous number that was sent to this endpoint by any user on any browser. This will require some form of server-side persistence and you could use a flat file or a database or an external service - whichever you prefer - just have a good reason for your choice. e.g. if you go to the endpoint and provide the number 24, and then later I go to the same endpoint from a different computer and provide the number 25, your application should send back 24, since 24 was the previous number sent to the application at this endpoint
