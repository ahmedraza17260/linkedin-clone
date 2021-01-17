/* eslint-disable no-lone-blocks */
import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(
  ({ name, description, message, photoUrl, timestamp }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}> {name[0]} </Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <p>{timestamp}</p> */}
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption
            className="blueColor"
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);
export default Post;

{
  /* <li class="social-details-social-counts__reactions social-details-social-counts__item ">
      <button class="social-details-social-counts__count-value t-12 t-black--light t-normal hoverable-link-text " aria-label="622 Reactions on M A BHATTI’S post" type="button">
    <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="LIKE" data-test-reactions-icon-type="LIKE">
  
    <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="EMPATHY" data-test-reactions-icon-type="EMPATHY">
  
    <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small" src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="APPRECIATION" data-test-reactions-icon-type="APPRECIATION">
            <span aria-hidden="true" class="v-align-middle social-details-social-counts__reactions-count">622</span>
      </button>
    </li> */
}
