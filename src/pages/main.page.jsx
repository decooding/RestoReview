import React, { Component } from 'react'
import CardList from '../components/cardList.component'
import SliderImg from '../components/sliderImg.component'
import TextBlock from '../components/textBlock.component'
import MainCategory from '../constructor/Main_category'
import MainRecomend from '../constructor/Main_recomend'
import JurnalContainer from '../constructor/jurnalContainer'
import TopRatingCom from '../constructor/TopRatingComment'
import FlushExample from '../components/accordion.component'


export default class Main extends Component {
  render() {
    return (
      <div>
        <SliderImg />
        <TextBlock value = 'Типы заведений'/>
        <MainCategory/>
        <TextBlock value = 'Все заведений'/>
        <CardList />
        <TextBlock id='recomend' value = 'Рекомендуем посетить'/>
        <MainRecomend/>
        <TextBlock value = 'Онлайн журнал'/>
        <JurnalContainer/>
        <TextBlock value = 'Топ Рейтинг'/>
        <TopRatingCom/>

        <FlushExample/>
      </div>
    )
  }
}
