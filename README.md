# Brain Dump

Brain Dump is a React application built with Vite. It aims to provide users with a simple and efficient way to jot down and manage their thoughts and ideas. 

## Features

- Dumper for load out your thoughts and ideas
- ShittyList for revealing your brain's stuff
- Remembering stuff in LocalStorage

## Setup

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/itsdorosh/brain-dump.git
    cd brain-dump
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`.

## Components

### App

The `App` component is the main component of the application. It manages the state and renders the `Dumper` and `ShittyList` components based on the state.

### Dumper

The `Dumper` component is used to display the main content when the `ShittyList` is not revealed.

### ShittyList

The `ShittyList` component is used to display a list of items when revealed.
