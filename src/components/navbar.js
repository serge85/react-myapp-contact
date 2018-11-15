import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content,Textfield } from "react-mdl";
import UserModal from "./usermodal";
import ContactList from "./contactlist";

class NavBar extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Contacts" scroll={true} className='header-color'>
            <Navigation>
                <a href="/"><i className="fa fa-address-book-o fa-lg" aria-hidden="true"></i></a>
                <a href="/" style={{cursor: 'pointer'}}><i className="fa fa-bell-o fa-lg" aria-hidden="true" ></i></a>
                <UserModal />
            </Navigation>
          </Header>
          <Drawer title="Contacts">
            <Navigation>
              <Textfield
                onChange={ () => {}}
                label= 'Expandable Input'
                expandable={true}
                expandableIcon='search'
                placeholder='search'
                className='nav-search'
              />
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <ContactList/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
