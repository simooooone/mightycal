import React, { useEffect, useRef } from "react";

const History = (params) => {
  let renderHistory = useRef(null);
  // Set the focus for the last element in history scrolling the div at bottom
  useEffect(() => {
    let historyInternal = document.querySelector(".history-internal");
    historyInternal.scrollTop = historyInternal.scrollHeight;
  }, [params]);

  useEffect(() => {
    if (params.ret !== "") {
      renderHistory.current.style = "display: block";
    } else {
      renderHistory.current.style = "display: none";
    }
  }, [params.ret]);

  return (
    <div className="history" ref={renderHistory}>
      <div
        className="history-internal"
        dangerouslySetInnerHTML={{ __html: params.ret }}
      ></div>
    </div>
  );
};

export default History;
