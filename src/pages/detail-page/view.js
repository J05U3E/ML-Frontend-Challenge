const React = require('react');
const DetailProduct = require('../../components/DetailProduct');

const Detail = ({ data }) => {

    return(
        <DetailProduct item={data} />
    )
}

module.exports = Detail;

