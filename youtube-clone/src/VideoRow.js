import React from 'react'
import "./VideoRow.css"

function VideoRow( { views, subs, description, timestamp, channel, title, image }) {
  return (
    <div className="videoRow">
      <img src={ image } alt="" />
      <div className="videoRow_text">
        <h3>{ title }</h3>
        <p className="videoRow_headline">
          { channel } * <span className="videoRow_subs"><span className="videoRow_subsNumber">{ subs }</span> Subscribers { views } views * { timestamp }</span>
        </p>
        <p>
          { description }
        </p>
      </div>
    </div>
  )
}

export default VideoRow
