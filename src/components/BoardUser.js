import React, { useState, useEffect } from "react";

import { getUserBoard } from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await getUserBoard();
          setContent(response.data);
      } catch(error) {
          setContent(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardUser;