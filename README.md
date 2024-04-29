# Instructions:

Please clone (or download as a zip) this repository.  It is assumed that, since you are applying for a position which works with React applications, you will have Node (and, obviously, npm) installed. If this is not the case on the machine you are working on now, please let the interviewer know and this can be done quite quickly. This interview will need to be completed in view of the interviewer or interview team so the ability to share your screen is imperative.

This portion of the interview breaks down into two parts: one is a mandatory function hydration and another, secondary, part presents you with the opportunity to choose any/all of a set of optional tasks. Keep in mind that you will have approximately 40 - 45 minutes (there is no timer but we do want to allow some time for discussion afterward) to complete these tasks.  

Within the App.js file you will find a simple test harness.  A test string can be typed into the input box and it will be evaluated by clicking the supplied button.  You can just run the app with npm start once you have installed the necessary npm modules as normal.

The mandatory step which must be completed first is the following:

- Inside the stringUtils.js module you will find a single method skeleton with directions in the comments.  Please complete the method by following these directions.  As mentioned above, you will find that there is _already_ a test harness in place for you.

**Only after** you have completed the above mandatory step, here are several options to modify the application. Please choose among them for as many as you feel you can code in the allotted timeframe:

- The test harness currently manipulates the string on the press of a button.  Remove that button and cause the manipulation to occur after each character is entered.

- Modify the application to accept an array of strings to manipulate and, upon completion, return an array of results with each member of the array having shape of `{OriginalString : XXXX, ManipulatedString: YYYY}` (where "XXXX" is the string passed into the function and where the property YYYY is the result of your function being called).  The results of this can be displayed in a table or just output to the console, depending upon the time left.