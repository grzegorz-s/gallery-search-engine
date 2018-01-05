import React, { Component } from 'react';
import { fetchFlickr } from '../utils/api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tag: 'cats',
      images: []
    };
  }

  async fetchGallery(tag) {
    if (!this.state.tag) return;

    const fetchedTag = this.state.tag;
    const images = await fetchFlickr(fetchedTag);


    this.setState({
      tag: fetchedTag,
      images: [...this.state.images, ...images]
    });

    console.log(this.state.images);
  }

  componentDidMount() {
    this.fetchGallery();
  }

  render() {
    return(
      <div data-tag={this.state.tag} className="gallery component">
        {this.state.tag}
        {this.state.images.map((image) => 
          <img src={image.mediaUrl} />
        )}
        

      </div>
    )
  } 
}

export default App;
