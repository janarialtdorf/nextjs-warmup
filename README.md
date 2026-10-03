## 8. What I Learned

### 1. What does Next.js provide beyond React alone?

Next.js provides features such as routing, server-side code, API endpoints, and Server Components on top of React. This means we can build both the frontend and backend parts of an application in the same project.

### 2. Why does the counter need use client?

The counter needs use client because it uses useState and an onClick event. These features need to run in the user's browser. Basically if it's a component it has to have it in the beginning of the file.

### 3. Where does the code in app/api/message/route.js run?

The code in app/api/message/route.js runs on the server. The browser sends a request to the endpoint and the server sends the response back.

### 4. How is this endpoint similar to an Express route?

It is similar to an Express route because it handles an HTTP request and returns a response.

### 5. Why must secrets remain on the server?

Secrets such as API keys and database credentials must remain on the server because browser code can be inspected by users. If a secret is included in client-side code, users could potentially access it. Kind of like keeping more secretive things in the backend rather than frontend?
