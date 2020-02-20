import VideoList from './VideoList.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      currentVideoList: exampleVideoData
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);

    // console.log(initialVideoList);
    // console.log(this.state.currentVideoList);
  }

  searchHandler() {
    searchYouTube({key: YOUTUBE_API_KEY, query: 'React JS tutorial', max: 5}, function(data) {
      this.setState(
        {currentVideoList: data}
      );
    });
  }

  clickHandler(event) {
    this.setState(
      {currentVideo: JSON.parse(event.target.id)}
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideoList} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
