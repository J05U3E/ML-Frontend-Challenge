const React = require('react');
const SearchBox = require('../components/SearchBox');
require('../pages/detail-page/view')
const ReactDom = require('react-dom');

const DetailProduct = ({ item }) => {

    return(
        <div>
            <SearchBox />
            <div className='detail-body'>
                <p className='path-breadcrumb'>{item.category_id}<strong>{item.lastCategory}</strong></p>
                <div className='container-detail'>
                    <div className='top'>
                        <div className='image-cantainer' >
                            <img
                                src={item.img}
                                className='image-detail'
                            />
                        </div>
                        <div className='title-price'>
                            <p className='condition'>
                                {item.condition === "new" ? "Nuevo" + (item.sold_quantity !=0 ? " - " + item.sold_quantity + " vendidos": "") : ""}
                            </p>
                            <p className='title'><strong>{item.title}</strong> </p>
                            <div className='price'>
                                <span className='price-currency'> {item.currency =='ARS' ? '$' : item.currency }</span>
                                <span className='price-int'> {item.price}</span>
                                <span className='price-cents'><sup>{item.cents != 0 ? item.cents:"00"}</sup></span>
                            </div>


                            {item.shipping === "true" ? "logoEnvio" : " "}
                            <button type='submit' className='button-buy'> Comprar </button>
                        </div>
                    </div>
                    
                    <h2 className='description-title'>Descripción del producto</h2>
                    <p className='description-text'>{item.description}</p>
                </div>
            </div>
        </div>
    )
};

module.exports = DetailProduct;

