const React = require('react');
const ReactDom = require('react-dom');
require('../pages/results-page/view');
require('../pages/detail-page/view');

const CardResult = (props) => {
    
    return(
        <>
            <div id={props.id} className='container-card' onClick={() => props.onDetail(props.id)}>
                <img
                    src={props.img}
                    className='image-product' />
                <div className='text'>
                    <div className='text-price'>
                        <span className='price-currency'> {props.currency =='ARS' ? '$' : props.currency }</span>
                        <span className='price-int'> {props.price}</span>
                        <span className='price-cents'><sup>{props.cents != 0 ? props.cents:"00"}      </sup></span>
                        <img
                        src="/static/images/ic_shipping.png"
                        className='sendlogo' />
                    </div>
                    
                    <p className="text-title"> {props.title} </p>
                </div>
                <div className='state-city'>
                    <p>{props.state}</p>
                    <p>{props.city}</p>
                </div>
            </div>
            <div className='background-line'>
                <div className='line'></div>
            </div>
        </>
    );
};

module.exports = CardResult;