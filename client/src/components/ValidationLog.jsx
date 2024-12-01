import React from "react";

const ValidationLog = ({ logs }) => {
  return (
    <div className="validation-log">
      <h3>Validation Results</h3>
      <ul>
        {logs.map((log, index) => (
          <li
            key={index}
            className={log.success ? "text-green-500" : "text-red-500"}
          >
            {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationLog;
