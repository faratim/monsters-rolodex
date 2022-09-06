import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
    return(<div className='App'>
    <h1 className="app-title">Monsters Rolodex</h1> 
     
     <SearchBox
         className='monsters-search-box'
         onChangeHandler={onSearchChange}
         placeholder='search monsters' />
     <CardList monsters={filteredMonsters} />
 </div>)
}
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(() => {
                    return { monsters: users };
                })
            );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toString().toLowerCase();
        this.setState(() => {
            return { searchField }; //this is shorthand, the key of the object will be the name of the variable, the value of the object will be the value of the variable
        });
    };

    render() {
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this; //this is de-structuring. we've pulled off what's on this.state and this and cast them to variables

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toString().toLowerCase().includes(searchField);
        });

        return (
            <div className='App'>
               <h1 className="app-title">Monsters Rolodex</h1> 
                
                <SearchBox
                    className='monsters-search-box'
                    onChangeHandler={onSearchChange}
                    placeholder='search monsters' />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
