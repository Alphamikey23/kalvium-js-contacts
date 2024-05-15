![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | JS | Kalvium-CONTACTS

We have learned promise works in JavaScript. Now lets work with our promise lab, applying all of the concepts we have just learned.

## How to approach this lab:

There are no test cases for this lab - you just need to complete the task given below and compare the your output with the image provided below.
As there are no test cases - so you are free to explore and experiment with your frontend skills -- keeping in mind -> the basic and required functionality mentioned below **must** be achieved -- only after that you are free to show-off your frontend skills!

### Progression 1: PROMISE ME

Create a promise call which fetches data from (https://jsonplaceholder.typicode.com/users). When the promise gets resolved display the data in console.

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/contact-list-js-1.png)

The above image is of browser console, but you can even use stackblitz console for the same purpose.

### Progression 2: SHOW MY PROMISE

Once the promise gets resolved, Display it in the form of list as shown in the output.
Use the code snippet below for reference

```
var player='<h2>Lists of Users</h2>';
                    result.forEach(function(user) {
                     player+=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`
```

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/contact-list-js-2.png)

### Progression 3: REJECT ME

When the promise call is rejected then throw an error.

```
(error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
```

Happy Coding Kalvium❤️
