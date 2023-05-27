import React, { Component } from 'react'
import UserComment from '../components/UserComment.component'

export default class TopRating extends Component {
  render() {
    return (
      <div className='col'>
        <UserComment
        imgUser="user.jpg"
        titleCom="Заголовок комментария"
        dateCom="10 мая 2023"
        textCom="Текст комментария"
        UserName="Имя пользователя"
        Rating="5"
        RatingStar="⭐️⭐️⭐️⭐️⭐️"
        />
        <UserComment
        imgUser="user.jpg"
        titleCom="Заголовок комментария"
        dateCom="10 мая 2023"
        textCom="Текст комментария"
        UserName="Имя пользователя"
        Rating="5"
        RatingStar="⭐️⭐️⭐️⭐️⭐️"
        />
        <UserComment
        imgUser="user.jpg"
        titleCom="Заголовок комментария"
        dateCom="10 мая 2023"
        textCom="Текст комментария"
        UserName="Имя пользователя"
        Rating="5"
        RatingStar="⭐️⭐️⭐️⭐️⭐️"
        />
        <UserComment
        imgUser="user.jpg"
        titleCom="Заголовок комментария"
        dateCom="10 мая 2023"
        textCom="Текст комментария"
        UserName="Имя пользователя"
        Rating="5"
        RatingStar="⭐️⭐️⭐️⭐️⭐️"
        />
        <UserComment
        imgUser="user.jpg"
        titleCom="Заголовок комментария"
        dateCom="10 мая 2023"
        textCom="Текст комментария"
        UserName="Имя пользователя"
        Rating="5"
        RatingStar="⭐️⭐️⭐️⭐️⭐️"
        />
      </div>
    )
  }
}
