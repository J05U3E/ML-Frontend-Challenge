const React = require('react');
const SearchBox = require('../../components/SearchBox');
const CardResult = require('../../components/CardResult');
const SearchResult = require('../../components/SearchResult');

const Results = ({ data }) =>{
    return(
        <>
            {/* <SearchBox />
            <div>
                {data.map(item => <CardResult 
                        id={item.id} 
                        title={item.title} 
                        price={item.price} 
                        moneda={item.moneda} 
                        img={item.img} 
                        city={item.city} 
                        state={item.state} 
                        />               
                    )
                }
            </div> */}
            <SearchResult items={data} />
        </>
    )
}

module.exports = Results;

