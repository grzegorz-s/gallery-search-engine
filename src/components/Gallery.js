import React from 'react';
import { connect } from 'react-redux';
import { fetchGallery } from '../actions/actionsCreators';
import Loader from '../components/Loader';

import { GalleryBlock, GalleryTitle, ImagesHld, Image } from '../styled/Gallery';


class Gallery extends React.Component {

  componentDidMount() {
    this.props.fetchGallery(this.props.tag);
  }

  render() {
    return(
      <GalleryBlock>
        <GalleryTitle>TAG: {this.props.tag}</GalleryTitle>
        <ImagesHld>
          {this.props.gallery.isFetching ? <Loader /> : ''}
          {this.props.gallery.images.map((image, i) => {
            return <Image key={i} src={image.mediaUrl} />
          })}
        </ImagesHld>
      </GalleryBlock>
    )
  }
}

const mapStateToProps = (state, props) => ({
  gallery: state.gallery.data[props.tag]
});


const mapDispatchToProps = {
  fetchGallery
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
