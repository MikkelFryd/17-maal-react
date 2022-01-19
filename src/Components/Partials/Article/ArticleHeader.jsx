import React from "react";

export const ArticleHeader = (props) => {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <a href=".">Tilbage til top</a>
      </div>
      <i>
          {props.content}
      </i>
    </>
  );
};
