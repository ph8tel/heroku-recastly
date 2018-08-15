class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      activeVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(props) {
    this.props.searchYouTube({}, (response) => {
      this.setState({
        videos: response,
        activeVideo: response[0]
      });
    });
  }

  handleClick(e) {
    // which video was clicked
    // save the clicked video id to a variable newVidoeId
    var newVideoId = e.target.getAttribute('data-videoid');
    console.log('newVideoId', newVideoId);

    // loop through this.state.videos for matching ID
    var currentVideoList = this.state.videos;
    // save the matching video to an var called matchingVideo
    var matchingVideo = currentVideoList.filter(video => video.id.videoId === newVideoId);
    console.log('matchingVideo', matchingVideo);
    // update this.state activeVideo attribute to the matchingVideo
    // this.setState({ activeVideo: })
    this.setState({activeVideo: matchingVideo[0]});
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
            <div>
              <VideoPlayer video={this.state.activeVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div><VideoList
              videos={this.state.videos}
              handleClick={this.handleClick}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
