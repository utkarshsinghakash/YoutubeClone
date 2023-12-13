import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchpage-header">
        <div className="buttons">
          <button className="btn-1">All</button>
          <button>Shorts</button>
          <button>Videos</button>
          <button>Unwatched</button>
          <button>Watched</button>
          <button>Recently uploaded</button>
          <button>Live</button>
          <button>Amazon Clone</button>
          <button>PlayList</button>
        </div>

        <div className="filter">
          <TuneIcon />
          <h4>Filter</h4>
        </div>
      </div>
      <hr></hr>
      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AIf8zZRDiiescilO4rYZXxwz6KSGMNFSiw0HxvQ9C8cvpw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified="true"
        subs="1.3M subscribers"
        videos="560 videos"
        desc="You can find awesome programming lessons here! Also,expect programming tips and tricks that will take your coding skills to the... "
      />
      <hr></hr>
      <VideoRow
        views="1.4M"
        subs="658K"
        desc="Do you want a free one hour training..."
        time="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build Youtube Clone using ReactJs "
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
      />
      <VideoRow
        views="1.4M"
        subs="658K"
        desc="Do you want a free one hour training..."
        time="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build Youtube Clone using ReactJs "
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
      />
      <VideoRow
        views="1.4M"
        subs="658K"
        desc="Do you want a free one hour training..."
        time="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build Youtube Clone using ReactJs "
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
      />
      <VideoRow
        views="1.4M"
        subs="658K"
        desc="Do you want a free one hour training..."
        time="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build Youtube Clone using ReactJs "
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
      />
      <VideoRow
        views="1.4M"
        subs="658K"
        desc="Do you want a free one hour training..."
        time="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build Youtube Clone using ReactJs "
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
      />
    </div>
  );
}

export default SearchPage;
