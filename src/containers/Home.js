import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';

class Home extends React.Component {
  render() {
    return(
      <div className="app-body">
        <div className="app-background" />
        <div className="app-wrapper">
          <Sidebar />
          <div className="galleries-hld">
            {this.props.galleryTags.map((tag, i) => <Gallery key={i} tag={tag} />)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gallery: state.gallery.data,
  galleryTags: Object.keys(state.gallery.data)
});

export default connect(mapStateToProps)(Home);
