import React, { Component } from 'react';

class SearchForm extends Component 
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            
        }
    }

    render()
    {
        return (
            <form className="form-inline md-form mt-0">
                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
            </form>
        );
    }
}
export default SearchForm;