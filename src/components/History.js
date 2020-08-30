import React, { useEffect, useRef, memo } from "react";

const History = (props) => {
  const { histories } = props;
  let renderHistory = useRef(null);
  let historyInternal = useRef(null);

  useEffect(() => {
    // Set the focus for the last element in history scrolling the div at bottom
    historyInternal.current.scrollTop = historyInternal.current.scrollHeight;

    histories.length !== 0
      ? (renderHistory.current.style = "display: block")
      : (renderHistory.current.style = "display: none");
  }, [histories]);

  return (
    <div className="history" ref={renderHistory}>
      <div className="history-internal" ref={historyInternal}>
        {histories.map((prop, index) => {
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

export default memo(History);
