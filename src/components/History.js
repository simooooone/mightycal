import React from "react";

const History = (params) => {
  /* const [operation, setOperation] = useState([]); */

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
