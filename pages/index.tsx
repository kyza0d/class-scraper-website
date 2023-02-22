import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://web-production-3882d.up.railway.app/", {
      data: {
        url: "https://www.nerdfonts.com/cheat-sheet",
        format: {
          name: ".class-name",
          glyph: ".codepoint"
        }
      }
    })
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  }, []);

  console.log(data)

  return (
    <div>
      Hello
    </div>
  );
}

export default Home;
