```mermaid

sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note
  
  server->>browser: Status Code: 302
  
  browser->>server: GET 
```
