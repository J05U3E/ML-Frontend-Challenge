const React = require('react');
const ReactDom = require('react-dom');
const { useState , useEffect } = React;
const SearchBox = require('../components/SearchBox');
const CardResult = require('./CardResult');

const SearchResult = ({ items }) => {
    const [search, setSearch] = useState(items);
    
    function onDetail(id){
        const product = items.filter(el => {
            if((el.id)===(id)){
                return el
            }
        });
        //console.log("id clickeado ",id, " product=", product);
        window.location.href = `/detail?id=${id}`;

    }
    
    return(
        <div className='results'>
            <SearchBox />
            <div className='container-results'>
                <div  className='path-breadcrumb'>{items[0].category}<strong>{items[0].lastCategory}</strong></div>
                <ul className='list-cards'>
                    {
                        search.map(item => (
                            <li key={item.id} className='list'>
                                <CardResult 
                                    id={item.id} 
                                    onDetail={onDetail} 
                                    title={item.title == undefined ? item.message:item.title} 
                                    price={item.price} 
                                    currency={item.currency} 
                                    cents={item.cents}
                                    img={item.img == undefined ? "/static/images/404.png" :item.img} 
                                    city={item.city} 
                                    state={item.state} 
                                    shipping={item.shipping == false || item.img == undefined ? " " :"/static/images/ic_shipping.png"}
                                />
                            </li>
                        ))
                    }       
                </ul>
            </div>
        </div>
    )
};

//cada elemento de html recibe una prop desde donde es llamada

module.exports = SearchResult;
