import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import socketIoClient from 'socket.io-client';

import './style.css';
import FormSendChat from './FormSendChat';
import { receiveChat } from '../../public/redux/actions/home';

class Chat extends Component {

  componentDidMount() {
    const socket = socketIoClient('http://localhost:5000')

    socket.on(this.props.auth.userData.id,(value) => {
      this.handleReceiveChat(value)
    })
  }

  handleReceiveChat(value){
    const { dispatch } = this.props
    dispatch(receiveChat(value))
  }

  render() {

    const { chat } = this.props.home
    const { id } = this.props.auth.userData
    

    return (
      <div className="mesgs">
        <div className="msg_history">
          {chat.map((item) => (
            id===item.fromUserId? (
              <div className="outgoing_msg" key={item.id.toString()}>
                <div className="sent_msg">
                  <p>{item.chat}</p>
                  <span className="time_date"> 11:01 AM    |    Today</span>
                </div>
              </div>
            ):(
              <div className="incoming_msg" key={item.id.toString()}>
                <div className="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                  <p>{item.chat}</p>
                  <span className="time_date"> 11:01 AM    |    Yesterday</span>
                </div>
                </div>
              </div>
            )
          ))}
        </div>
        <FormSendChat />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth
})

export default connect(mapStateToProps)(Chat);