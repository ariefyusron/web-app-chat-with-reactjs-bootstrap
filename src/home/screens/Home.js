import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import './style.css';
import { logout } from '../../public/redux/actions/auth';

class Home extends Component {

  componentDidMount() {
    document.title = 'Home'
  }

  handleLogout = () => {
    this.props.dispatch(logout())
  }

  render() {

    const { isLoading } = this.props.auth
    
    if(isLoading){
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }

    return (
      <div className="container">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input type="text" className="search-bar"  placeholder="Search" />
                    <span className="input-group-addon">
                      <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="inbox_chat">
                <div className="chat_list active_chat">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                      <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mesgs">
              <div className="msg_history">
                <div className="incoming_msg">
                  <div className="incoming_msg_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span className="time_date"> 11:01 AM    |    Yesterday</span>
                  </div>
                  </div>
                </div>
                <div className="outgoing_msg">
                  <div className="sent_msg">
                    <p>Apollo University, Delhi, India Test</p>
                    <span className="time_date"> 11:01 AM    |    Today</span>
                  </div>
                </div>
              </div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <input type="text" className="write_msg" placeholder="Type a message" />
                  <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.handleLogout} className='btn btn-danger'>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Home);