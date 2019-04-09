# A serverless URL shortener web application and API built with Cloud Functions

The application is a simple URL shortener website where users can post URLs. It demonstrates how to build a serverless web application where static content is hosted in a storage bucket (here it uses GitHub Pages) and the backend is implemented with Cloud Functions. API Gateway is used to expose the Cloud Functions for the web user interface.

Basic idea behind this implementation of Url shortener is that it is possible to create such service using FAAS (Function As A Service) approach. I selected Javascript as a main language because I can use it completely for free on the free hosting service from GitHub.

# How to use Url shortener:
1) Add your url to the service using form on the right side of the page;
2) After url will be added to the database you will see it rendered on the left side of the page;
3) Shortening mechanism is just md5 hash of the url (it was selected for the demonstration purposes)
4) Then you can click on the any hash and you will be redirected to the url of this hash in 2 seconds;
5) For better understanding how it works please use it with open Chrome developer tools since there I have added console logs.
6) Empty record in the url list is the index created for the documents, just ignore it

# In this App I have used 3 API calls:
1) First API call is to fetch all entries and render it on the page
2) Second API call is used to store new record to the database
3) Third API call is used for searching entries in the database when user clicks on the selected hash

# Technologies I have used in this task:
1) IBM Cloudant NoSQL database: https://www.ibm.com/cloud/cloudant
2) IBM Apache Whisk for the FAAS implementation: https://openwhisk.apache.org/
3) IBM Bluemix for managing all of those services: https://console.bluemix.net/catalog/

# Scale issues:
I did not test this APP under high load but I assume that in such implementation it is just matter of plan of subscription you have on the IBM platform. You can select medium plan and I think it should work for the required scale.

# Functions:
I have added all functions under actions folder, they have written on Javascript (NodeJS).

# Access for checking Actions and Cloudant database:

Login: kozym@getnada.com

Pass: AJ4xmzi62sH2GfW

# URLS:

Actions + API URL: https://cloud.ibm.com/openwhisk/actions

Cloudant URL: https://673e54aa-45fc-4ca4-9df0-dd8326a3a6e4-bluemix.cloudant.com/dashboard.html#database/shortener/_all_docs

## License

See [LICENSE](LICENSE) for license information.
