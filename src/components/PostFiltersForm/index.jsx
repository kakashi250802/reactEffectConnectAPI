import React,{useState,useRef} from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit:null,
}
function PostFiltersForm(props) {
    const { onSubmit} = props;
    const [searchTern, setSearchTern] = useState('');
    const typingTimeoutRef = useRef(null);
    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTern(value);

        if(!onSubmit) return;

        if(typingTimeoutRef.current){

            clearTimeout(typingTimeoutRef.current);
        }


        typingTimeoutRef.current = setTimeout(() =>{

            const formValues ={
                searchTern: value,
            }

            onSubmit(formValues);
        },300)
    }

    return (
        <form>
            <input 
            type="text" 
            value={searchTern} 
            onChange={handleSearchTermChange}
            
            />
        </form>
    );
}

export default PostFiltersForm;