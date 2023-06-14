# M02W05 - Networking with TCP and HTTP

### To Do
- [] Discuss networking and the need for protocols
- [] TCP introduction
- [] TCP demo
- [] HTTP fundamentals

### What is networking?
- Communication between machines on a network
- Any computer can talk to any other computer on the network

### What is a protocol?
- A defined standard for how requests and responses are sent between network devices

### The OSI Model
- Open Systems Interconnection Model developed by the International Organization for Standardization (ISO)
- Conceptual model of data is transmitted over a network

1. **Physical** - physical pieces of hardware
2. **Datalink** - how the physical device is connect to the network
3. **Network** - communication between devices over the network
4. **Transport** - splits up the network communication into ports (~65000 of them)
5. **Session** - establishes a session between two connected devices
6. **Presentation** - data translation layer (encryption and decryption)
7. **Application** - the application (client or server)

### TCP/IP Model
1. **Network Access** - physical devices and how they connect to the network
2. **Internetwork** - communication between devices on the network
3. **Transport** - splits up the network communication into ports
4. **Application** - clients and servers/applications and services/sessions and encryption

### Transport Layer Protocols
- Break data into packets to be sent over the network layer
- Give each packet a header with origin and destination
- **UDP**: **U**ser **D**atagram **P**rotocol
- Useful for streaming/low latency applications
- _Connectionless_ ie. there is no need to establish or maintain a connection
- No error recovery (any corrupted are discarded)
- Packets can arrive in any order
- Smaller header size (8 btyes) which results in smaller packet sizes
- **TCP**: **T**ransportation **C**ontrol **P**rotocol
 - Larger header size (20 bytes)
 - Requires a connection (3 way handshake)
 - Corrupted packets are reported to the server and are re-sent
 - Packets arrive in order
 - Useful when guaranteed communication is needed

 ### IP Protocol (IP)
 - This uniquely identifies the machine on the network ("street address")
 - Comes in two flavours: IPv4 and IPv6
 * `192.168.1.1` 4.2 billion IPv4 addresses
 * `2001:db8:3333:4444:5555:6666:7777:8888` 
 * The port identifies the application ("apartment number")
 * We have 65,535 ports to choose from (per internet connection)
 * Popular ports:
    * HTTP: 80
    * HTTPS: 443
    * FTP: 21
    * SMTP: 25
    * Postgres: 5432

### HTTP
- **H**yper**T**ext **T**ransfer **P**rotocol
- Protocol for how messages are formatted and transmitted
- Call and response communication
- _State-less_: no memory of any previous communication
- Routes to resources are made up of methods (verbs) and paths
- **METHODS**: GET, POST, PUT, PATCH, DELETE
- **PATHS**: '/users', 'users/123'
- Returns status codes for each communication (eg. 200, 300, 404, 500) 
- Response headers contain information about the response such as media type and content size
- Response body contains the content (JSON, html, etc)

### Useful Links
* [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
* [Net package documentation](https://nodejs.org/api/net.html)
* [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [Request Package](https://www.npmjs.com/package/request)
* [HTTP Cats](https://http.cat/)




