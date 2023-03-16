# Star Uais Front-end

This is the front-end that uses the [Star Uais API project](https://github.com/lguilhermefl/star-uais-api)

## Getting started

First, clone the repository and install the dependencies.

```bash
git git@github.com:lguilhermefl/star-uais-front.git
cd star-uais-front
npm install
```

You'll need to create a `.env` with the following variables:

```bash
VITE_GOOGLE_CLIENT_ID=
VITE_CRYPTOJS_SECRET=
VITE_API_URL=
```

To get your Google client id you'll need to create a project at [https://console.cloud.google.com/projectcreate](https://console.cloud.google.com/projectcreate) and allow this application to use it by authorizing it's url request, in this case the default is http://localhost:5173.

## Running the app

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
