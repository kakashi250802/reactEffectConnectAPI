import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination:PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps={
    onPageChange: null,
}


function Pagination(props) {
const { pagination,onPageChange}=props
const {_page, _limit ,_totalRows} = pagination;
const totalPages = Math.ceil(_totalRows / _limit);

function handlePageChange(newPage) {
    if(onPageChange){
        console.log(newPage)
        onPageChange(newPage)
    }

}

    return (
        <div>
            <button 
                onClick={
                    () => handlePageChange(_page - 1 )
                }
                disabled={
                    _page<= 1
                }
            >
                Prev
            </button>
            <button 
                onClick={
                    () => handlePageChange(_page + 1 )
                }
                disabled={
                    _page>= totalPages
                }
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;