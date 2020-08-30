import React from 'react';

class SearchBar extends React.Component{
    // we create state for searching term
    state={term: ''};

    //function to target value we write in search bar and update the state with that value
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    //function to submit the form, we use event prevent Default so the page wont be refreshed automatically after we submit the form
    // we assign state to the onFormSubmit method, so the state here has the text we write to search for something and the form will be submited with the text we write on search bar
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}  className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;