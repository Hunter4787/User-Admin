import React, { Component } from 'react';
import Select from 'react-select-search'

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const scaryAnimals = [
            { label: "Alligators", value: 1 },
            { label: "Crocodiles", value: 2 },
            { label: "Sharks", value: 3 },
            { label: "Small crocodiles", value: 4 },
            { label: "Smallest crocodiles", value: 5 },
            { label: "Snakes", value: 6 },
          ];
          const App = () => (
            <div className="app">
              <div className="container">
                <Select options={scaryAnimals} />
              </div>
            </div>
          ); 
        return ( <div>
            
            App(scaryAnimals) 
        </div>
          );
    }
}

export default Searchbar;
