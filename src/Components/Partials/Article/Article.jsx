import Style from "./article.module.scss";
import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";

export const Article = (props) => {

  // Console.log props to be sure they are passed in
  console.log(props.articles)

  return (
    <article className={Style.myarticle}>
        {/* Component to return article header with props */}
      <ArticleHeader
        title={"UDFORDRINGER"}
        content={<div>Der er en lang række faktorer der har indvirkning på opfyldelsen af de
        mål, man gennem aftaler har forpligtiget sig til.</div>}
      />
      {/* Map of all articles passed in with props.articles 
        Returns an <ArticleContent/> component with the article item for each.
      */}
      {props.articles.map((item, index) => {
        return <ArticleContent key={index} article={item} />;
      })}
    </article>
  );
};
