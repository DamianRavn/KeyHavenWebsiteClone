import React, { Component } from 'react';

class SearchForm extends Component 
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            searchInput: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) 
    {
        this.setState(
        {
            searchInput: event.target.value
        });
    }
    
    handleSubmit(event) 
    {
        event.preventDefault();
        const data = new FormData(event.target);
        // this.props.tilføjNyOpgave(data.get("opgavetekst"));
        this.setState({ searchInput: "" });
    }

    render()
    {
        return (
            <form className="form-inline md-form mt-0">
                <input 
                className="form-control mr-sm-2 mb-0" 
                type="text" 
                value={this.state.input_text}
                placeholder="Search" 
                aria-label="Search"
                onChange={this.handleInputChange}
                onSubmit={this.handleSubmit}
                />
            </form>
        );
    }
}
export default SearchForm;