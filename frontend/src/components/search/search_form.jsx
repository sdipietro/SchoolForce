import React from 'react';


    const SearchForm = (props) => {
        const { query } = props; 

        return (
         <input type='text' value={query} onChange={updateQuery} />

        )
    }

    updateQuery (e) {

        return e => {
            this.state.query = e.currentTarget.value
        }

    }

}