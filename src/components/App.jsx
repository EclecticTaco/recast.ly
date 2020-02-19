import VideoList from './VideoList.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentVideo: undefined};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.setState(
      {currentVideo: JSON.parse(event.target.id)}
    );
  }

  render() {
    var initialVideo = (<VideoPlayer video={exampleVideoData[0]} />);
    if (this.state.currentVideo) {
      var newVideo = (<VideoPlayer video={this.state.currentVideo.video} />);
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>{this.state.currentVideo ? newVideo : initialVideo} /></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
