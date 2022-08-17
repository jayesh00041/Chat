import "./Chat.style.css";
import React from "react";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faGear,
  faAngleDown,
  faXmark,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import AsideChat from "./";
export default function Chat() {
  return (
    <div className="container">
      <div className="aside-chat"></div>
      <div className="chat-window">
        {/* header of chat window */}
        <div className="chat-header">
          <div>
            <Avatar src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" />
            Jasmine
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <FontAwesomeIcon icon={faAngleDown} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        {/* Messages component */}
        <div className="messages">
          <div className="received">
            <div>
              <div className="msg-body">
                Hello
                <br />
                How are you?
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;10:30
                </p>
              </div>
              <div className="msg-sender">
                <Avatar
                  sx={{ width: "1rem", height: "1rem" }}
                  src="https://popularbio.com/wp-content/uploads/2020/05/Jully-Molina-1-1200x900.jpg"
                />
                <span>Jully</span>
              </div>
            </div>
          </div>
          {/* sent msg component */}
          <div className="sent">
            <div>
              <div className="msg-body">
                Hello
                <br />
                How are you?
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;10:30
                </p>
              </div>
              <div className="msg-sender">
                <span>Jully</span>
                <Avatar
                  sx={{ width: "1rem", height: "1rem" }}
                  src="https://popularbio.com/wp-content/uploads/2020/05/Jully-Molina-1-1200x900.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
