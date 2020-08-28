import React, { useEffect, useRef } from "react";

const History = (props) => {
  let renderHistory = useRef(null);
  // Set the focus for the last element in history scrolling the div at bottom
  useEffect(() => {
    let historyInternal = document.querySelector(".history-internal");
    historyInternal.scrollTop = historyInternal.scrollHeight;
  }, [props]);

  useEffect(() => {
    if (props.ret !== "") {
      renderHistory.current.style = "display: block";
    } else {
      renderHistory.current.style = "display: none";
    }
  }, [props.ret]);

  return (
    <div className="history" ref={renderHistory}>
      <div
        className="history-internal"
        dangerouslySetInnerHTML={{ __html: props.ret }}
      ></div>
    </div>
  );
};

export default History;
