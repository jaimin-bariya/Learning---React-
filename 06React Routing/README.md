
# React Routing Demo 🚀

Welcome to my React Routing Demo project! This project showcases basic routing in a React application using React Router. Even though it seems very easy and basic to me, it serves as a great starting point for anyone new to React Router. Check it out [here](https://jaimin-bariya.github.io/React-Routing-Demo)!

## Project Overview 🎉

This project demonstrates:

- **Client-side Routing** using React Router.
- Handling nested routes.
- Using layout components to manage page structure.
- Custom error handling with an Error Page.

## Live Demo 🌐

You can see the live demo of this project [here](https://jaimin-bariya.github.io/React-Routing-Demo).

## Technologies and Libraries Used 📚

- **React**: For building user interfaces.
- **React Router**: For handling routing.
- **Vite**: For fast development and building.
- **gh-pages**: For deploying to GitHub Pages.

## Project Setup 🛠️

To run this project locally:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/jaimin-bariya/React-Routing-Demo.git
    cd React-Routing-Demo
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

4. **Build for production:**

    ```sh
    npm run build
    ```

5. **Deploy to GitHub Pages:**

    ```sh
    npm run deploy
    ```

## Folder Structure 📁

- **public/**: Contains the `index.html` and `404.html` for routing.
- **src/**: Contains the source code.
  - **Components/**: Contains React components.
  - **index.css**: Global styles.
  - **main.jsx**: Entry point of the application.

## Routes Configuration 📍

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="me" element={<User />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="user/:userID" element={<User />} />
      <Route path="github" element={<Github />} loader={githubFollowerInfo} />
    </Route>
  ),
  { basename: '/React-Routing-Demo' }
);
```

## License 📄

This project is licensed under the MIT License.

## Author 🧑‍💻

Created with ❤️ by JP.

Feel free to check out the project and provide feedback. Enjoy coding! 😃

