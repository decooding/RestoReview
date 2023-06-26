import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import GridCard from '../components/grid_card.component';

export default class MainCategory extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/restouran"><GridCard value="Рестораны" img="https://avatars.mds.yandex.net/i?id=8349f9e1168ac0109b0c421470b4f17fcfd54c58-5236318-images-thumbs&n=13"/></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/Pab"><GridCard value="Бары/Пабы" img="https://avatars.mds.yandex.net/i?id=eeb01ae322680c488dbbd77bdcb12ce463dc01d0-5917291-images-thumbs&n=13" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/karaoke"><GridCard value="Караоке" img="https://avatars.mds.yandex.net/i?id=f54f00302b77493b1c3a147b4a4dc19335381d88-8496968-images-thumbs&n=13" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/cafe"><GridCard value="Кафе" img="https://avatars.mds.yandex.net/i?id=6bcb632acae65b15d5acc7dc6865d6ca15242fe5-9262149-images-thumbs&n=13"/></a>
          </Row>
          <Row>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/fastfood"><GridCard value="Быстрое питание" img="https://avatars.mds.yandex.net/i?id=28785537ddbc233fb4a5699bfd607845-4628144-images-thumbs&n=13" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/coffe"><GridCard value="Кофейни" img="https://avatars.mds.yandex.net/i?id=d77803a8d38252eccf4c45257926e6313e4c1d7d-9104009-images-thumbs&n=13" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/sushi"><GridCard value="Суши-бары" img="https://avatars.mds.yandex.net/i?id=0963bf6cecdc941efbbc5b7da8177b1dca7dba49-9245043-images-thumbs&n=13" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/stolovka"><GridCard value="Столовые" img="https://avatars.mds.yandex.net/i?id=f4f0371ed9756d9163b2f9274c342b8a75d5e5f0-5219719-images-thumbs&n=13" /></a>
          </Row>
        </Container>
      </div>
    );
  }
}
