import React from "react";
import {
  List,
  ListItem,
  ListItemContent,
  ListItemAction,
  Checkbox,
  Grid,
  Cell
} from "react-mdl";
import ContactSearchField from "./contactsearchfield";

const URL_CONTACTS = "http://localhost:3004/contacts";

class ContactList extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        contacts: "",
        updatedList: ""
      };

      this.searchContact = this.searchContact.bind(this);
      this.generateContacts = this.generateContacts.bind(this);
  }

  componentDidMount() {
    fetch(URL_CONTACTS, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        this.setState({
          contacts: data,
          updatedList: data
        });
      });
  }

  searchContact = e => {
    var updatedList = this.state.contacts
    updatedList = updatedList.filter(function(item){
       return item.firstname.toLowerCase().search(e.target.value.toLowerCase()) !== -1
       || item.lastname.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({updatedList: updatedList });
  }

  generateContacts(contacts){
    if (contacts) {
        return contacts.map(item => {
          return (
            <List key={item.id}>
              <ListItem twoLine>
                <ListItemContent avatar="person" subtitle={item.dateadded} style={{cursor: 'pointer'}}>
                  {`${item.firstname} ${item.lastname}`}
                </ListItemContent>
                <ListItemAction>
                  <Checkbox />
                </ListItemAction>
              </ListItem>
            </List>
          );
        });
      }
  }

  render() {
    return (
        <div>
          <Grid>
            <Cell col={12} style={{ paddingLeft: "20px" }}>
                <ContactSearchField searchContact = { this.searchContact } />
            </Cell>
          </Grid>
          {
             this.generateContacts(this.state.updatedList)
          }
        </div>
      );
    };
  }

export default ContactList;
