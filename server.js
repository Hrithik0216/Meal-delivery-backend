const app = require('./app')
const port = 3000
const ip = "0.0.0.0" || "35.160.120.126" || "44.233.151.27" || "34.211.200.85"
app.listen(port, function () {
    console.log(`listening to ${port}`)
})
