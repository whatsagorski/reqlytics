var Xray = require('x-ray')

var xray = Xray()


function getReqBody(validatedURL) {
    return xray(validatedURL, 'body@html')(fn)
}

export { getReqBody }