require('@babel/register')({
    ignore: ['node_modules'],
});

const axios = require("axios");
const express = require('express');
const path = require('path');
const InitView  = require('../pages/init-page/view.js');
const ResultsView  = require('../pages/results-page/view.js');
const DetailView  = require('../pages/detail-page/view.js');
const render = require('./render');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//middleware para buscar en a api de mercado libre  
const getItems = async (req,res,next) => {
    const search = req.query.search
    const items = await axios.get(`https://api.mercadolibre.com/sites/MLA/search`,{
        params: {
            q: search,
            limit:'4'
        }
    });
    const categoryPath = await axios.get(`https://api.mercadolibre.com/categories/${items.data.results[0].category_id}`)
    const breadCrumb1 = categoryPath.data.path_from_root.map(ob => ob.name);
    const lastCategory = breadCrumb1.pop();
    breadCrumb1.push("")
    const category = breadCrumb1.join("  >  ");

    const getItems = [];
    
    for (let i = 0; i < 4; i++) {
        const price = items.data.results[i].price;
        const priceInt = Math.floor(price);
        const cents = Math.floor((price - priceInt) * 100);

        if(items.data.results[i] != undefined){
            const a = { 
            id:items.data.results[i].id, 
            category,
            lastCategory,
            img:items.data.results[i].thumbnail, 
            title : items.data.results[i].title, 
            currency: items.data.results[i].currency_id,
            price: new Intl.NumberFormat('de-DE').format(priceInt),
            cents,
            city: items.data.results[i].address.city_name,
            state: items.data.results[i].address.state_name,
            shipping: items.data.results[i].shipping.free_shipping,
            };
        getItems.push(a);
        }
    }
    //console.log(getItems);
    res.locals.data = getItems;
    //console.log("INDEX getItems  ", getItems); //muestra todos los items para result 
    next();
}

//middleware que recibe el id del Result y lo guarda en la variable data para DETAIL
const getProduct = async (req,res,next) => {
    const id = req.query.id
    const product = await axios.get(`https://api.mercadolibre.com/items?ids=${id}`);
    const price = product.data[0].body.price;   // precio con decimales
    const priceInt = Math.floor(price);         // parte entera
    const cents = Math.floor((price - priceInt) * 100);     // parte decimal

    const a = { 
        id: product.data[0].body.id,
        category_id: "",
        img: product.data[0].body.pictures[0].url,  
        title : product.data[0].body.title, 
        currency: product.data[0].body.currency_id,
        price: new Intl.NumberFormat('de-DE').format(priceInt), 
        cents,
        city: product.data[0].body.seller_address.city.name,
        state: product.data[0].body.seller_address.state.name,
        description: "",
        shipping: product.data[0].body.shipping.free_shipping,
        condition: product.data[0].body.condition,
        categories: product.data[0].body.condition,
        sold_quantity: product.data[0].body.sold_quantity
        };
    const descriptionObj = await axios.get(`https://api.mercadolibre.com/items/${a.id}/description`);
    const categoryId = await axios.get(`https://api.mercadolibre.com/categories/${product.data[0].body.category_id}`);

    const category_id = categoryId.data.path_from_root.map(ob => ob.name);
    const lastCategory = category_id.pop();
    category_id.push("")
    const category = category_id.join("  >  ");

    const description = descriptionObj.data.plain_text;
    a.description = description;
    a.category_id = category;
    a.lastCategory = lastCategory; 
    res.locals.data = a;
    next();
}

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));
app.get('/', (req, res)=>{
    res.redirect('/init');
});
app.get('/init', render(InitView));
app.get('/results', getItems, render(ResultsView));
app.get('/detail', getProduct, render(DetailView));

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('algo salio maaaaal!');
// });

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});