import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        {/* <h2>Today’s most viewed courses</h2> */}
        <InfoIcon />
      </div>
      {newsArticle(
        "Software Developer",
        "Get an introduction to the programming skills needed for a career as a software developer. This learning path provides a broad perspective on core technologies for web development, software development, and databases. It introduces common tools and the bigger picture of how development careers work."
      )}
      {newsArticle(
        "Project Manager",
        "Project managers are catalysts for change. Learn how to manage projects from beginning to end using proven project management techniques. After completing this learning path, you'll have the skills and knowledge to manage simple projects as well as complex, enterprise-wide initiatives."
      )}
      {newsArticle(
        "Graphic Designer",
        "Graphic designers create visual concepts that inspire, inform, and transform. Use industry-leading tools to build innovative design projects and discover the skills needed to become an in-demand visual thinker and communicator."
      )}
    </div>
  );
}

export default Widgets;
