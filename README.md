# Flipkat Clone
LINK=>  https://flipkart-eight.vercel.app/
This is a Flipkat clone project, a web application that replicates some of the functionalities of the popular e-commerce platform Flipkart. This README provides an overview of the project and instructions for setting it up and running it on your local machine.




![Vite + React - Brave 03-07-2023 00_13_53](https://github.com/Aman0246/Flipkart/assets/130737436/1a2e7a84-3bf9-444c-b916-a3be6c7c2f76)
![Vite + React - Brave 03-07-2023 00_13_38](https://github.com/Aman0246/Flipkart/assets/130737436/73f6da47-006d-4443-856c-47f04a40d267)
![Vite + React - Brave 03-07-2023 00_16_01](https://github.com/Aman0246/Flipkart/assets/130737436/7467ab05-9a10-4f70-906d-6a2e1fcc4b73)
![Vite + React - Brave 03-07-2023 00_14_59](https://github.com/Aman0246/Flipkart/assets/130737436/17731cd0-a54f-4a9f-b260-44e10e012835)
![Vite + React - Brave 03-07-2023 00_14_48](https://github.com/Aman0246/Flipkart/assets/130737436/03c1d663-352d-430f-b5f8-2b185cbfe4b9)

![Vite + React - Brave 03-07-2023 00_15_10](https://github.com/Aman0246/Flipkart/assets/130737436/311440d9-6ecf-449d-871d-b7d60e7c6375)



## Technologies Used![Vite + React - Brave 03-07-2023 00_14_25](https://github.com/Aman0246/Flipkart/assets/130737436/3fab7c35-798a-456b-85a2-31a75fd6c49e)


The project is built using the following technologies:

### Backend
- AWS
- Node.js
- Express
- bcrypt
- jsonwebtoken
- cors

### Frontend
- React.js
- Redux Toolkit
- axios
- React Router DOM
- Material-UI
- Tailwind CSS

## Getting Started

To get a local copy of the project up and running on your machine, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/en/download/)
- Git: [Download Git](https://git-scm.com/downloads)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/flipkat-clone.git
```

2. Navigate to the project directory:

```
cd flipkat-clone
```

### Backend Setup

3. Install backend dependencies:

```
cd backend
npm install
```

4. Create a `.env` file in the `backend` directory and add the following environment variables:

```
PORT=3001
JWT_SECRET=your_jwt_secret
```

5. Start the backend server:

```
npm start
```

### Frontend Setup

6. Open a new terminal window and navigate to the project directory:

```
cd flipkat-clone
```

7. Install frontend dependencies:

```
cd frontend
npm install
```

8. Create a `.env` file in the `frontend` directory and add the following environment variables:

```
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

9. Start the frontend development server:

```
npm start
```

### Usage

Once the backend and frontend servers are running, you can access the Flipkat Clone application by opening your browser and navigating to `http://localhost:3000`.

## Features

- User authentication and registration
- Product browsing and search
- Product details page
- Add to cart functionality
- Checkout process
- Order history
- User profile management

## Validation

The project incorporates proper validation techniques to ensure data integrity and user experience. This includes client-side form validation using React libraries and server-side validation using backend technologies.

## Contributing

If you would like to contribute to this project, you can follow the steps below:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push the branch to your fork: `git push origin my-new-feature`.
5. Submit a pull request.

## License

This project is licensed under the [AkCom.](LICENSE).

## Acknowledgements

- Flipkart for providing inspiration and serving as a reference for this project.

Feel free to customize this README according to your project's specific details. Good luck with your Flipkat Clone project!
