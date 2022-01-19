import React from "react";
import Style from './article.module.scss';

export const ArticleContent = (props) => {

  return (
    <>
      <h5>{props.article.title}.</h5>
      <div className={Style.imagearticle}>
          {props.article.content}
        <img src={props.article.image} alt="" />
      </div>
    </>
  );
};
