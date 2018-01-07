import React from 'react';
import { connect } from 'react-redux';
import { addGallery, removeGallery } from '../actions/actionsCreators';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const galleryTag = this.refs.tag.value;
    this.props.addGallery(galleryTag);
    this.refs.galleryForm.reset();
  }

  renderTags(tag, i) {
    return (
      <div className="app-sidebar__tag" key={i}>
        <p>{tag}</p>
        <button className="delete-btn" onClick={this.props.removeGallery.bind(null, tag, i)} />
      </div>
    )
  }

  render() {
    return(
      <aside className="app-sidebar">
        <div className="app-sidebar__inner">
        <h1 className="t-h1 u-center">GALLERIES</h1>
          <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {Object.keys(this.props.gallery).map(this.renderTags.bind(this))}
          </ReactCSSTransitionGroup>
          <form className="submit-form" ref="galleryForm" type="text" onSubmit={this.handleSubmit.bind(this)}>
            <input className="submit-form__text-input" type="text" ref="tag" placeholder="add new" />
            <input type="submit" hidden /> 
          </form>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  gallery: state.gallery.data,
});

const mapDispatchToProps = {
  addGallery,
  removeGallery
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);