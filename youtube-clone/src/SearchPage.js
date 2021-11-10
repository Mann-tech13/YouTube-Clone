import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
      image=""
      channel="CP"
      verified
      sub="660K"
      noOfVideos={555}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nulla fugit tempora earum dolorem exercitationem autem iusto soluta necessitatibus dolor id omnis animi, officia reprehenderit ab porro odio. Nesciunt, illo!"/>
      <hr />
      <VideoRow
      views="1.4M"
      subs="789K"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nulla fugit tempora earum dolorem exercitationem autem iusto soluta necessitatibus dolor id omnis animi, officia reprehenderit ab porro odio. Nesciunt, illo!"
      timestamp="44 seconds ago"
      channel="CP"
      title="YT clone"
      image=""
      />
    </div> 
  )
}

export default SearchPage
