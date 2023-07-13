import React from "react";

interface FooterProps {
  data: {
    copyright: string,
    website: string,
    orgName: string
  };
}

export const Footer: React.FC<FooterProps> = (props) => {

  return (
    <div>
      <div id="footer">
        <div className="container text-center">
          <p>
            {props.data? props.data.copyright : "loading"}
            <a href={props.data? props.data.website : "loading"} rel="nofollow"> {props.data? props.data.orgName : "loading"}</a>
          </p>
        </div>
      </div>
    </div>
  );
};
