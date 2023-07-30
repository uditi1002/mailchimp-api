# **Newsletter Signup Application**


## **Overview**
The Newsletter Signup Application is a simple web application built with Node.js, Express.js, and the Mailchimp API. 
It allows users to sign up for a newsletter by providing their first name, last name, and email address. 
The user data is then sent to a Mailchimp server to be added as a subscriber.

## **Prerequisites**
Before running the application, make sure you have the following installed:

* **Node.js**: Ensure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

## **Getting Started**
1. Clone the repository to your local machine using the following command:

   ```git clone <repository_url>```
3. Navigate to the project directory:

   ```cd newsletter-signup-app```
5. Install the required dependencies by running:

   ```npm install```
7. Create a file named secrets.env in the root directory and provide the following information:

   ```
   API_KEY=<YOUR_MAILCHIMP_API_KEY>
   URL=<YOUR_MAILCHIMP_API_URL>
   ```

## **Running the Application**
To start the server, run the following command:

```npm start```

The server will start running on port 3000, and you can access the application by visiting http://localhost:3000 in your web browser.

## **How to Use**

1. Access the application using the URL mentioned above.
   
2. Fill in the signup form with your first name, last name, and email address.

3. Click the "Sign Up" button to submit the form.

4. If the signup is successful, you will be redirected to a success page confirming your subscription.

5. If there is an error during signup, you will be redirected to a failure page.

## **Technologies Used**
* **Node.js**: A JavaScript runtime used for building server-side applications.

* **Express.js**: A web application framework for Node.js that simplifies the process of building web applications.

* **Mailchimp API**: The API provided by Mailchimp to manage email marketing and newsletter subscriptions.

## **Contributing**

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.
