import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Notfound: React.FC = () => (
  <div
    style={{
      paddingTop: "200px",
      height: "100vh",
      backgroundColor: "aliceblue",
    }}
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/chat-box">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </div>
);

export default Notfound;
