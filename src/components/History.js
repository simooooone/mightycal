import React, { useEffect, useRef } from "react";

const History = (props) => {
  let renderHistory = useRef(null);
  let historyInternal = useRef(null);

  // Set the focus for the last element in history scrolling the div at bottom
  useEffect(() => {
    historyInternal.current.scrollTop = historyInternal.current.scrollHeight;
  }, [props]);

  useEffect(() => {
    props.ret.length !== 0
      ? (renderHistory.current.style = "display: block")
      : (renderHistory.current.style = "display: none");
  }, [props.ret]);

  return (
    <div className="history" ref={renderHistory}>
      <div className="history-internal" ref={historyInternal}>
        {props.ret.map((prop, index) => {
          return (
            <div key={index}>
              <span>{prop}</span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
