import React from 'react';
import { connect } from 'react-redux';
import { addGallery, removeGallery } from '../actions/actionsCreators';

import { H1, P} from '../styled/Typo';
import { DeleteButton, Form, FormTextInput } from '../styled/App';
import { SidebarBody, SidebarInner, SidebarTag } from '../styled/Sidebar';

class Sidebar extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    const galleryTag = this.tag.value;
    this.props.addGallery(galleryTag);
    this.galleryForm.reset();
  }

  renderTags(tag, i) {
    // console.log(gallery);
    return (
      <SidebarTag key={i}>
        <P>{tag}</P>
        <DeleteButton onClick={this.props.removeGallery.bind(null, tag, i)} />
      </SidebarTag>
    )
  }

  render() {
    console.log(this.props);
    return(
      <SidebarBody>
        <SidebarInner>
        <H1>GALLERIES</H1>
        {Object.keys(this.props.gallery).map(this.renderTags.bind(this))}
        <Form innerRef={(form) => this.galleryForm = form} type="text" onSubmit={this.handleSubmit.bind(this)}>
          <FormTextInput type="text" innerRef={(input) => this.tag = input} placeholder="add new" />
          <input type="submit" hidden /> 
        </Form>
        </SidebarInner>
      </SidebarBody>
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

// export default Sidebar;