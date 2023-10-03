# Vendor application using MongoDB, Express, React and Node (MERN)

This MERN App allows you to create, read, update, and delete vendor list items. It displays 5 records at a time. You can toggle pages to see previous and next records using Back and Next button. 

## Live Demo
[Click here to see live demo hosted online](https://vendorlistapp.netlify.app/)

The frontend is hosted on netlify and backend is hosted on render.
(Free tier so speed is slow)

## Getting Started

### Prerequisites

This sample application integrates with free services for database connection connection ([MongoDB](https://account.mongodb.com/account/login)).

For local development you need to have node and npm installed.

### Installing

To run locally.

Clone the project:
```
git clone https://github.com/ankpan18/vendorapp.git
```

Create a .env file in server folder and add DATABASE_URL and PORT in it. Also you need to replace the the link mentioned in DisplayVendor, CreateVendor, and UpdateVendor accordingly.

Install all server and client dependencies:
```
npm install
(cd client/ && npm install)
(cd server/ && npm install)
```

App will be available at:
```
http://localhost:3000/
```

You need to run both client and server to use this project. Also you need to give unique account number for each vendor otherwise you will get a error message.


## Screenshots

Below are some screenshots of this application.

![image](https://github.com/ankpan18/vendorapp/assets/79756942/dee59876-5d26-42fb-91de-190df73e0384)

![image](https://github.com/ankpan18/vendorapp/assets/79756942/2a03167b-fcf8-44af-b5ce-2cbc9cfd542e)

![image](https://github.com/ankpan18/vendorapp/assets/79756942/b861e681-51e4-4e79-b6d9-e029071d6aa1)

![image](https://github.com/ankpan18/vendorapp/assets/79756942/2eeedcab-02f4-4e6f-8a27-0d1a9cb3d531)

