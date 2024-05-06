import React, { useState } from "react";

const TaskDetails = ({ question }) => {
  return (
    <div className="mt-6">
      <label htmlFor="question">{question.description}:</label>
      <label className="border px-4 py-2 rounded-xl mx-2">
        <input
          type="radio"
          name={`option${question.id}`}
          value="yes"
          className="mr-1"
        />
        Yes
      </label>
      <label className="border px-4 py-2 rounded-xl mx-2">
        <input
          type="radio"
          name={`option${question.id}`}
          value="no"
          className="mr-1"
        />
        No
      </label>
    </div>
  );
};

export default TaskDetails;
