const { getFont, downloadFont } = require('@joncasey/google-fonts')

getFont('Open Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800')
  .then(font => downloadFont(font, 'Open Sans'))
  .then(results => console.log(results))
  .catch(error => console.log(`Error`, error))
