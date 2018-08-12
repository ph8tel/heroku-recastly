class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      activeVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // TODO:
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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
