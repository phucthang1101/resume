import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <div className="col-12 col-lg-6 contact-grid">
                    <h2>Thắng Trần</h2>
                    <div className="contact_avatar">
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{ height: '250px' }}
                    />
                    </div>
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                </div>
                <div className="col-12 col-lg-6 contact-grid">
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    <p>(123) 456-7890</p>
                  </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-fax" aria-hidden="true" />
                                    <p> (123) 456-7890</p>
                  </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <p>   someone@example.com</p>
                  </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    <p> MySkypeID</p>
                  </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        );
    }


}


export default Contact;