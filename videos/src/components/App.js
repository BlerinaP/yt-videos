import React from 'react';
import SearchBar from './SearchBar'
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";

class App extends React.Component{
    //we declare state for our video search and video we select
    state = {videos: [], selectedVideo: null};

//We use componentDidMount to make a search default, so evrytime we visit the app search for 2020 songs will be default
    componentDidMount() {
        this.onTermSubmit('2020songs')
    }

    //We created a function to make request on the youtube api with the actual term we write inside search input//
    //then we update state with the actual response we get after search and we update selectedVideo state te get automatically the first video inside array
    onTermSubmit = async(term) =>{
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    //this function is created to regonize the actual video we select te watch, so we update state
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                           <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;