# Google Fonts Downloader

See the package documentation on [NPM](https://www.npmjs.com/package/@joncasey/google-fonts) and [Github](https://github.com/joncasey/google-fonts) for detailed usage information.

## To Use:
1. Install NodeJS if you don't have it.
2. Open a command window in this folder.
3. Run `npm install` to download required packages.
4. Open the `index.js` file. Specify the font you want to download and the location to save the files.
5. Run `node index.js`.
6. Profit.

## Items of Note:
[Google Fonts](https://fonts.google.com/) will only provide the normal "400" face unless otherwise specified. To download additional font faces, select the faces you want on [Google Fonts](https://fonts.google.com/), then use the embed link to target your request.

Instead of...

``` javascript
    getFont('Open Sans')
```
Use the embed link of...

```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap">
```
To query for...
``` javascript
    getFont('Open Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800')
```