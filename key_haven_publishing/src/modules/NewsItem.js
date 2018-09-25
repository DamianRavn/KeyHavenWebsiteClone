import React from "react"

export const NewsItem = (props) =>
{
    return(
        <div >
            {props.newsObjects.map(newsItem =>
            {
                return(
                    <li className = "border">
                        <h3>{newsItem.header}</h3>
                        <pre>{newsItem.body}</pre>
                    </li>
                    
                );
            })}

        </div>
    );
}