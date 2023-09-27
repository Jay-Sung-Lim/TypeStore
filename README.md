<div align="center">
  <a href="https://github.com/Jay-Sung-Lim/TypeStore">
    <img src="https://github.com/Jay-Sung-Lim/TypeStore/assets/107202611/41d64f43-d466-4f3c-89bb-aa81279fce8f" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">TypeStore</h3>

  <p align="center">
    Keyboard Shopping Website
    <br />
    <a href="https://github.com/Jay-Sung-Lim/TypeStore"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://typestore.pages.dev/">View Demo</a>
    ·
    <a href="https://github.com/Jay-Sung-Lim/TypeStore/issues">Report Bug</a>
    ·
    <a href="https://github.com/Jay-Sung-Lim/TypeStore/issues">Request Feature</a>
  </p>
</div>

<!-- Table of Contents -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
      <ul>
        <li><a href="#user-authentication">User Authentication</a></li>
        <li><a href="#product-listings">Product Listings</a></li>
        <li><a href="#image-storage-with-cloudinary">Image Storage with Cloudinary</a></li>
        <li><a href="#shopping-cart">Shopping Cart</a></li>
      </ul>
    </li>
    <li>
      <a href="#built-with">Built with</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

# About The Project

![typestore](https://github.com/Jay-Sung-Lim/TypeStore/assets/107202611/27581ffb-231f-4642-a9be-585d7189b8dd)

This Keyboard Shopping Website is a fully responsive React-based e-commerce platform built with Tailwind CSS and powered by Firebase. It offers a seamless shopping experience for keyboard enthusiasts, allowing them to explore and purchase their favorite keyboard products. Here's an overview of the key features and technologies used in this project:

# Key Features

## User Authentication

The website implements user authentication using Firebase, which enables secure and convenient login via Google accounts. This ensures that users can create accounts, log in, and securely manage their profiles and orders.

## Product Listings

Users can browse a wide range of keyboard products, view detailed product information, and add items to their shopping carts. The website provides an intuitive and user-friendly interface for product discovery.

## Image Storage with Cloudinary

To efficiently manage and serve product images, Cloudinary is integrated with Firebase's database. This combination ensures that high-quality images are delivered quickly to users, enhancing the overall shopping experience.

## Shopping Cart

The website includes a shopping cart feature, allowing users to easily add, remove, and modify items in their carts. This functionality makes it simple for customers to review their selections before proceeding to checkout.

# Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

# Getting Started

To run the project locally or contribute to its development, follow the instructions

## Prerequisites

* Get API Key at [https://firebase.google.com/](https://firebase.google.com/)
* Get API Key at [https://cloudinary.com/](https://cloudinary.com/)

## Installation

1. Clone the repo
   ```
   git clone https://github.com/Jay-Sung-Lim/TypeStore.git
   ```
2. Install yarn packages
   ```
   yarn add
   ```
3. Enter your API in `.env.local`
   ```
   REACT_APP_FIREBASE_API_KEY = YOUR_FIREBASE_API_KEY_HERE
   REACT_APP_FIREBASE_AUTH_DOMAIN = YOUR_FIREBASE_AUTH_DOMAIN_HERE
   REACT_APP_FIREBASE_DB_URL = YOUR_FIREBASE_DB_URL_HERE
   REACT_APP_FIREBASE_PROJECT_ID = YOUR_FIREBASE_PROJECT_ID_HERE
   REACT_APP_CLOUDINARY_PRESET = YOUR_CLOUDINARY_PRESET_HERE
   REACT_APP_CLOUDINARY_URL = YOUR_CLOUDINARY_URL_HERE
   ```
4. Runs the app
   ```
   yarn start
   ```
   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

   The page will reload when you make changes.\
   You may also see any lint errors in the console.

# Deployment

The website is deployed and hosted on Cloudflare, ensuring high availability and fast loading times for users. You can access the live website at [https://typestore.pages.dev/](https://typestore.pages.dev/).

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# License

This project is licensed under the MIT License. See the `License.txt` file for details.
