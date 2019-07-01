import React from "react";
import useAPI from "./useAPI";

const ResourceList = ({ resource }) => {
  const resources = useAPI(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
