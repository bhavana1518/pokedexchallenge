import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from  'react-bootstrap-table';

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
        

        return (
          <div>
      <BootstrapTable data={pokes}>
      <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter'} }> Name</TableHeaderColumn>
      <TableHeaderColumn dataField='num'>Num</TableHeaderColumn>
      <TableHeaderColumn dataField='type'filter={ { type: 'TextFilter'} } > Type</TableHeaderColumn>
      <TableHeaderColumn dataField='weaknesses' filter={{type:'TextFilter'}}>Weaknesses</TableHeaderColumn>
      </BootstrapTable>
            </div>
        );
      }
    }

export default Pokemon;