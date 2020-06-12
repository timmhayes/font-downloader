const { getFont, downloadFont } = require('@joncasey/google-fonts')
 
getFont('Antic Didone')
  .then(font => downloadFont(font, 'Antic Didone'))
  .then(results => console.log(results))
  .catch(error => console.log(`Error`, error))