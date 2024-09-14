import React, { memo } from "react";

type FilterProps = {
  setFilter: (filter: string) => void;
};

const Filter = ({ setFilter }: FilterProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="taskFilter">Filter Tasks: </label>
      <select id="taskFilter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default memo(Filter);
