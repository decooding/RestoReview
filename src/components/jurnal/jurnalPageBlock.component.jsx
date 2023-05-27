import React from 'react'

export default function jurnalPageBlock(props) {
  return (
    <div className="mt-5" style={{textAlign:'left'}}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <img src={props.image} alt="" />
        <p className="mt-3"><b>КУХНЯ:</b> {props.kuh}</p>
        <p><b>АДРЕС:</b> {props.address}</p>
        <hr />
    </div>
  )
}
