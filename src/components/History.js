import React, { useEffect } from "react";

const History = (params) => {
  // Set the focus for the last element in history scrolling the div
  useEffect(() => {
    let historyInternal = document.querySelector(".history-internal");
    historyInternal.scrollTop = historyInternal.scrollHeight;
  }, [params]);

  return (
    <div className="history">
      <div
        className="history-internal"
        dangerouslySetInnerHTML={{ __html: params.ret }}
      ></div>
    </div>
  );
};

export default History;
