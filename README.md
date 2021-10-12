# The web frontend client of the “Address Book” application

This is a React Application that Is calling https://randomuser.me/ to get a list of users and display them on the screen, It also allows by clicking on the **See Details** button to have access to the **user's name, title, and phone number**.

# To run the application

I recommend using Docker, which from my point of view, is the most convenient way of running it:

- Presence of a **.env file** in the main directory of the app is required to provide the environment variables that are needed in the app.
- Install Docker, that compatible with your operating system using https://docs.docker.com/get-docker/
- Run the following commands from within the project's main directory to spin up a container and use the app:
  - docker build -t react-docker .
  - docker run -p 3000:80 react-docker
- now you should be able to use the app on http://localhost:3000/

# To run the tests with coverage

npm test -- --coverage --watchAll=false

# Technologies Used

### - React

    [React Hooks, Custom Hooks, Context Api, React-Router, React-Query, Function Components, Material-UI]

### - TypeScript

    [put effort to avoid using type 'any' as much as I could, to prevent developer errors]

### - Code Quality tools

    [Eslint, Prettier, Lint-staged, conventional commits to enforcing development and committing standrads]

### - Docker

    [ docker-compose with Nginx]

### - Testing

    [I'm familiar and functional with testing, and would have added more if I had more time]

# Overall Approach

### couple of steps I took in mind before coding

- Understanding the problem at hand.

- Think of possible ways of solving it.

- Choose the proper tools that I was aware of.

- Kept the quality of code in mind all the time.

- Since I like **functional programming, generics, abstractions, and keeping the code clean, I tried to pay attention to these, by creating reusable functions that 'do one thing', and tried to minimize the 'developer written' values that affect the app functionality, tried to 'type' objects, parameters when needed** and choose the tools that are appropriate for the scope of this application.
  For example, I **did not use Redux** because that was too much for this app, but I used React Context API, which has the same functionality.

- If I had more time, I would have:

  - Added more testing and coverage to ensure the functionality of the code( even though they are manually tested during development, but no excuse for not doing it).

  - Added more styling.

  - Deployed it to a cloud infrastructure
