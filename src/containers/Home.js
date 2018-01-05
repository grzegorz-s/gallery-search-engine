import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';
import { AppBackground, AppWrapper } from '../styled/App'
import { GalleriesHld } from '../styled/Gallery';


class Home extends React.Component {
  render() {
    return(
      <div className="app-body">
        <AppBackground />
        <AppWrapper>
          <Sidebar />
          <GalleriesHld>
            {this.props.galleryTags.map((tag, i) => <Gallery key={i} tag={tag} />)}
          </GalleriesHld>
        </AppWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gallery: state.gallery.data,
  galleryTags: Object.keys(state.gallery.data)
});

export default connect(mapStateToProps)(Home);
