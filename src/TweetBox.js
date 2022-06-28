import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from './firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Brennan L.',
      username: 'blonidier',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://www.clipartkey.com/mpngs/m/265-2656835_transparent-bucks-png-milwaukee-bucks-logo-png.png"
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
     <div className="tweetBox">
    <form>
        <div className="tweetBox__input">
            <Avatar src="https://www.clipartkey.com/mpngs/m/265-2656835_transparent-bucks-png-milwaukee-bucks-logo-png.png" />
            <input
            onChange={(e) => setTweetMessage(e.target.value)} 
            value={tweetMessage} placeholder="What's Happening?" type="text" />
           </div> 
       <input value={tweetImage}
       onChange={(e) => setTweetImage(e.target.value)} 
       className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text" /> 

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
    </form>
  </div>
  )
}

export default TweetBox