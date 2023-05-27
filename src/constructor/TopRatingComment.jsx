import React, { Component } from 'react';
import UserComment from '../components/UserComment.component';
import User from '../Data/users';
import Data from '../Data/data';
import Comment from '../Data/comment';
import { Button, Form, ListGroup } from 'react-bootstrap';

export default class TopRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      title: '',
      ratingStar: '',
      comments: [],
    };
  }

  handleReviewChange = (event) => {
    this.setState({ review: event.target.value });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleRatingStarChange = (event) => {
    this.setState({ ratingStar: event.target.value });
  };

  generateStars = (rating) => {
    const stars = '⭐️'.repeat(rating);
    return stars;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { review, title, ratingStar, comments } = this.state;

    // Создаем новый комментарий
    const newComment = {
      id: Date.now(),
      imgUser:
        'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png',
      title,
      date: new Date().toLocaleDateString(),
      text: review,
      UserName: 'Пользователь',
      RatingStar: this.generateStars(ratingStar),
    };

    // Добавляем новый комментарий в список комментариев
    const updatedComments = [...comments, newComment];

    // Обновляем состояние с новым списком комментариев и сбрасываем значения полей
    this.setState({ comments: updatedComments, review: '', title: '', ratingStar: '' });
  };

  render() {
    const { review, title, ratingStar, comments } = this.state;

    const botuserComments = User.map((user, index) => (
      <UserComment
        key={user.id}
        imgUser={user.img_url}
        title={Comment[index].title}
        date={Comment[index].date}
        text={Comment[index].comment}
        UserName={user.name}
        RatingStar={Data[index].Rating}
      />
    ));

    const userComments = comments.map((comment) => (
      <ListGroup.Item key={comment.id} className="d-flex align-items-center">
        <UserComment
          imgUser={comment.imgUser}
          title={comment.title}
          date={comment.date}
          text={comment.text}
          UserName={comment.UserName}
          RatingStar={comment.RatingStar}
        />
      </ListGroup.Item>
    ));

    return (
      <div className="container">
        <ListGroup>{botuserComments}</ListGroup>
        {userComments}
        <Form onSubmit={this.handleSubmit}>
  <div className="row">
    <Form.Group className="col-8" controlId="titleForm">
      <Form.Label>Заголовок:</Form.Label>
      <Form.Control
        type="text"
        value={title}
        onChange={this.handleTitleChange}
      />
    </Form.Group>
    <Form.Group className="col-2" controlId="ratingStarForm">
      <Form.Label>Рейтинг:</Form.Label>
      <Form.Control
        type="number"
        min={1}
        max={5}
        value={ratingStar}
        onChange={this.handleRatingStarChange}
      />
    </Form.Group>
    <div className="col-2 mt-4">
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </div>
  </div>
  <Form.Group controlId="reviewForm">
    <Form.Label>Отзыв:</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      value={review}
      onChange={this.handleReviewChange}
    />
  </Form.Group>
</Form>


      </div>
    );
  }
}
