---
tags: [Notebooks/Google_Sheets/Tutorials]
title: Setup Google Sheets API
created: '2019-10-21T18:35:40.939Z'
modified: '2019-10-21T18:35:41.667Z'
---

## Setup Google Sheets API

Use [this video tutorial](https://www.youtube.com/watch?v=MiPpQzW_ya0&t=472s) to guide you through the process.

## Create Setup Files

1) Install [Node.js](https://nodejs.org/en/)
2) Select where you want to create your project (eg. D:\Google Apps Scripts\Scripts) and **create a folder** there.
3) In the **console** (terminal) **navigate** to the folder you just created.
4) Run the command: `npm init`, then follow the prompts and name the entry point **main.js**.

## Enable Google Sheets API

1) In the [Google APIs Dashboard](https://console.developers.google.com/apis/dashboard), create a new project.
2) Name the project
3) Find Explore and enable APIs
4) Go back to the [Dashboard](https://console.developers.google.com/apis/dashboard) and select +ENABLE APIS AND SERVICES
5) Then find and select **Google Sheets API** and select, enable.

## Generate the Credentials

1) On the page you are automatically redirected to after enabling the API, select **CREATE CREDENTIALS**.
2) Fill out the required questions...
3) Select **What credentials do I need?**
4) On the next page, choose a service account name
5) Select **Editor** for the role
6) Leave the Key type as JSON
7) Select Continue
8) Move the file that is downloaded to the folder your created before and rename it to **keys.js**.
9) Copy the client_email on line 6
10) Create a new google spreadsheet and share it with that email.

## Required Questions

Which API are you using?
~ Google Sheets API
Where will you be calling the API from?
~ Web Server
What data will you be accessing?
~ Application Data
Are you planning to use this...?
~ No, I'm not using them

## Code

In keys.js

``` js
const { google } = require( 'googleapis' );
const keys = require( './keys.json' );

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  [ 'https://www.googleapis.com/auth/spreadsheets' ]
);

client.authorize( function ( err, tokens ) {
    if ( err ) {
      console.log( err );
      return;
    } else {
      console.log( 'connected' );
    }
});

```

## Create a New Project

![Image](<https://bit.ly/2MtTJw3> =400x400) ![Image](<https://bit.ly/2Mv3qdr> =500x400)
