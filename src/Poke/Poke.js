import React, { Component } from 'react';
import BootstrapTable from  'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pokemons: []
        };
      }
      
      componentDidMount() {
        const url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
    
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              pokemons: data.pokemon
            })
          })
      }
      
     
      render() {
        const pokes = this.state.pokemons;
        const columns = [
          
          {
          dataField: 'name',
          text: 'Name',
          filter:textFilter()
        }, {
          dataField: 'num',
          text: 'Number'
        }, 
        {
          dataField: 'type',
          text: 'Type',
          filter:textFilter()
        },
      {
        dataField:'weaknesses',
        text:'Weaknesses',
        filter: textFilter()
      }];

        return (
          <div>
      
      <BootstrapTable keyField='id' data={ pokes } columns={ columns } filter={ filterFactory() } />

            </div>
        );
      }
    }

export default Pokemon;