/**
 * Module dependencies
 */
let express = require('express')
let cors = require('cors')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

let port = process.env.port || 8080

let router = express.Router()

router.get('/articles', (req, res) => {
  res.json([{
    title: 'Spear Phishing increasing',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.'
  }, {
    title: 'Email fraud hits the White House',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.'
  }, {
    title: 'Another data leak',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.'
  }])
})

app.use('/api', router)

app.listen(port)
console.log('App listening on port ', port)
