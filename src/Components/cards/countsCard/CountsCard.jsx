import React from "react";
import { Card } from "react-bootstrap";
// css
import "./countsCard.scss";

const CountsCard = (props) => {
  const { data } = props;
  return (
    <>
      <Card className="countsCard">
        <div className="countsCard-top">
          <div className="title">{data?.title}</div>
          <div className="icon">{data?.icon}</div>
        </div>
        <div className="countsCard-middle">
          <div className="count">{data?.count}</div>
        </div>
      </Card>
    </>
  );
};

export default CountsCard;
