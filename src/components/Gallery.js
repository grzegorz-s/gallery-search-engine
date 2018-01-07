import React from 'react';
import { connect } from 'react-redux';
import { fetchGallery } from '../actions/actionsCreators';
import Loader from '../components/Loader';

class Gallery extends React.Component {

  componentDidMount() {
    this.props.fetchGallery(this.props.tag);
  }

  render() {
    return(
      <div className="gallery">
        <h3 className="gallery__title">TAG: {this.props.tag}</h3>
        <figure className="gallery__image-hld">
          {this.props.gallery.isFetching ? <Loader /> : ''}
          {this.props.gallery.images.map((image, i) => {
            return <img className="gallery__image" key={i} alt={image.title} src={image.mediaUrl} />
          })}
        </figure>
      </div>
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
