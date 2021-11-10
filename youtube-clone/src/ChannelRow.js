import { Avatar } from '@material-ui/core'
import "./ChannelRow.css"
import React from 'react'
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"

function ChannelRow({ image, channel, subs, noOfVideos, description, verified}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt={ channel } src={ image }/>
      <div className="channelRow_text">
        <h4>{ channel } { verified && <CheckCircleOutlineOutlinedIcon/> } </h4>
        <p>{ subs } subscribers * { noOfVideos }</p>
        <p>{ description }</p>
      </div>
      
    </div>
  )
}

export default ChannelRow
