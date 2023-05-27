import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import JurnalBlock from '../components/jurnal/jurnalBlock.component';
import BigJurnal from '../components/jurnal/BigjurnalBlock.component';
import '../style/Jurnal.css';
import food from '../Data/food'; 

export default class JurnalContainer extends Component {
  render() {
    return (
      <Container className='container-jurnal'>
        <a className='link' href="/jurnal">
          <BigJurnal
            image='https://astana.restolife.kz/upload/information_system_27/1/4/6/item_14659/item_14659.jpg'
            title='10 ЛУЧШИХ ЗАВЕДЕНИЙ С ЖИВОЙ МУЗЫКОЙ В АСТАНЕ'
            text='Предлагаем вам Десятку наиболее популярных столичных заведений'
          />
        </a>
        <a className='link' href="/jurnal-soup">
          <JurnalBlock
             image={food[0].image} 
             title={food[0].title} 
             shortText = {food[0].shortText}
           />
        </a>
        <a className='link' href="/jurnal-lepeshki">
          <JurnalBlock
            props = {1}
            image={food[1].image} 
            title={food[1].title} 
            shortText = {food[1].shortText}
          />
        </a>
      </Container>
    );
  }
}
