import React from 'react'
import { Container } from 'react-bootstrap'
import JurnalPageBlock from '../components/jurnal/jurnalPageBlock.component'
import cardsData from '../Data/data'

export default function JurnalPage() {
  return (
    <Container style={{width:'950px'}}>
        <h2 className='mt-5'>10 лучших заведений с живой музыкой в Астане</h2>
        <img className='mt-4' src="https://astana.restolife.kz/upload/information_system_27/1/4/6/item_14659/information_items_property_16158.jpg" alt="" />
        <p className='mt-3' style={{textAlign:'justify'}}>Рестораны и бары с живой музыкой в Астане пользуются огромным спросом. Ведь в таких заведениях вы можете не только отлично отдохнуть, вкусно поесть и хорошенько расслабиться после трудового дня, но также насладиться звучанием гитар, ударных инструментов и великолепного вокала в исполнении live-групп. Предлагаем вам Десятку наиболее популярных столичных заведений, где вы можете отдохнуть душой и телом.</p>

    {cardsData.map((data, index) => (
          <JurnalPageBlock
            key={index}
            image={data.image}
            title={data.title}
            type={data.type}
            text={data.text}
            kuh={data.kuh}
            time={data.time}
            address={data.address}
            RatingStar={data.RatingStar}
          />
        ))}
    </Container>
  )
}
