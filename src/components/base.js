const React = require('react');

const Base = ({ component: Component, items }) => {
    console.log("BASE" , items)  //me esta mandando todo el objeto de data que recibe axios
    return(
        <html>
            {/* <style>
                {"body { background-color: #aaaaaa; }"}
            </style> */}
            <body>
                <div id="root"><Component items={ items } /></div>
                <script src="http://localhost:3000/static/bundle.js" />
            </body>
        </html>
    );
};

module.exports = Base;