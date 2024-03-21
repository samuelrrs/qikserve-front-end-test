# QikServ Frontend Test

## Introduction

Before you begin, it's important to note that during development, the endpoints occasionally encountered a server-side error related to CORS. To test the project, you can add `access-control-allow-origin *` to the request headers or use a browser extension like [CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino).

## Project Overview

This project was developed using only pure CSS for styling all components, without the aid of any external libraries. The entire project is responsive and supports both web and mobile screen sizes.

## Technologies Used

- **React with TypeScript:** Frontend framework for building user interfaces.
- **Redux/Redux Saga:** State management library for managing application state and fetch the datas.
- **CSS:** Styling language used to design and style components.

## Installation Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server with `npm run dev` or `yarn start`.

## Development Notes

- The project is designed to handle responsive layouts for various screen sizes.
- Redux is used for state management, particularly for managing the shopping cart and product data.
- API endpoints are expected to return JSON data following a specific schema.
- Custom CSS classes and styles are used for component styling without external libraries.
- Error handling and data validation are implemented where necessary.

## Future Improvements

### Unit Testing

- Implement unit tests for critical components and functionality using testing libraries like Jest and React Testing Library.

### Internationalization

- Introduce internationalization (i18n) for translating text and handling date formats across different languages and locales.

## Feedback and Support

Thank you!
