import { Component } from 'react';
// Class Component from React
// Will learn about functional components later

import Card from '../card/card.component'
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    
                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        );
    }
}

export default CardList;
// allows other files to import the code
// by default, give them CardList
