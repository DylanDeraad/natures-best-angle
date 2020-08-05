const express = require('express')
const morgan = require('morgan')

//application variable to allow express to run in this file
const app = express()

app.use(morgan('dev'))
app.use(express.json())

const indexRoute = express.Router()


const indexRouteMiddleware = (request, response, nextFunction) => {
  console.log("request", request)
  nextFunction()

}

const indexRouteMiddleware2 = function(request,response, nextFunction) {
  console.log("request", request)
  return response.json('is this on')

}

indexRoute.route('/').get(indexRouteMiddleware,indexRouteMiddleware2)

app.use('/apis', indexRoute)

app.listen(4200, ()=> {console.log("express server was successfully built")})

