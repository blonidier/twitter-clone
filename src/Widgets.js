import React from 'react'
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NykeFragz"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100080255424379"}
          options={{ text: "#reactjs is awesome", via: "blonidier" }}
        />
      </div>
    </div>
  );
}

export default Widgets