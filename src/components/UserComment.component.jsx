import React from 'react';
import { Card } from 'react-bootstrap';

function UserComment(props) {
  return (
    <Card className="user-comment mb-3" style={{ width: '100%', height: '180px' }}>
      <Card.Body className="d-flex flex-column">
        <div className="row">
          <div className="col-2">
            <Card.Img src={props.imgUser} alt="UserImg" className="img-fluid" />
            <p style={{ fontSize: '14px' }}>{props.UserName}</p>
          </div>

          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h4>{props.titleCom}</h4>
              <div className="date">{props.dateCom}</div>
            </div>

            <p style={{
              textAlign:'left', 
              overflow: 'hidden',
              textOverflow: 'ellipsis'
              }}>{props.textCom}</p>

            <div className="d-flex justify-content-end align-items-center mt-2">
              <div style={{ marginRight: '8px' }}>Моя оценка:</div>
              <div style={{ marginRight: '8px' }}>{props.Rating}</div>
              <div>{props.RatingStar}</div>
            </div>

          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserComment;
