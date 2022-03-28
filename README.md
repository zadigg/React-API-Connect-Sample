This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
The http request was made using AXIOS so AXIOS must be installed
```bash
npm i axios

```
 
For this API call to work for you 
You have to change the API baseURL on the "/components/api" to ure API URL
![image](https://user-images.githubusercontent.com/62830716/160488102-c013af39-476c-48d7-90bb-303b54a32d41.png)

then go to _app.js and import the api.js and change the getData API (in this case "users" to ur API URL destination 
![image](https://user-images.githubusercontent.com/62830716/160488822-108c45de-cc9f-4764-a03d-b5f3750b0145.png)

