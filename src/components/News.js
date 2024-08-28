import React, { useEffect, useState } from "react";
import axios from "axios";
import { News } from "../config/api";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Cryptonews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(News
        );
        console.log(response.data.results);
        setNews(response.data.results);
      }
      fetchData();
    }, [])

  return (
    <div className="crypto-main">
        <h2>News related to Cryptocurrency</h2>
        {news.map(post => (
        <div className="news" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <h6>{post.pubDate}</h6>
        </div>
      ))}
    </div>
  );
}

export default Cryptonews;
