
# File transfer from Mobile to PC

Simply transfer File to PC without internet or data cable



## Run Locally

Clone the project
```bash
  git clone https://github.com/tarakes/filetransfer.git
```

Go to the project directory

```bash
  cd filetransfer
```

Install dependencies

```bash
  npm install
```
- Connect both device with same network

Start the server

```bash
  npm run start
```

- You can see availble IPs in desktop window
- Goto <IP_address>:4000 in Mobile browser
- Transfer files
- You can see your files in PC at "C:/filetransfer"
# Note:
- IP should be of network in which both device are connected

Make desktop App template setup
```bash
npm run make
```


## Software

- [Node.js](https://nodejs.org/en/)
- [Electron](https://electronjs.org/)
- [Bootstrap template](https://github.com/BlackrockDigital/startbootstrap-bare/)


## Demo
https://youtu.be/Kj4TKxhqoIA

## FAQ

#### Issue with File transfer?

Please allow the desktop app during startUp in Firewall

#### "filetransfer" folder not created?

You may need to give permission to create folder in C:/ drive

#### 4000 Port already in used?

Open app.js file and change port number to any other availble port
- Then you have to use that port number in IP:port



