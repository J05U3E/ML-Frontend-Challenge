const React = require('react');
const ReactDom = require('react-dom/server');
const serialize = require('serialize-javascript');

module.exports = (View) => {
    
    return (req, res) => {
        const html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(res.locals.data, {isJSON: true})};
                </script>
                <link rel="stylesheet" href="/static/${req.path.split('/')[1]}.css">
                <title>Mercado Libre</title>
                
                </head>
                <body>
                    <div id="root">${ReactDom.renderToString(<View data={res.locals.data} />)}</div>
                    <script src="/static/${req.path.split('/')[1]}.js"></script>
                </body>
            </html>`;
        res.send(html);
    }
}