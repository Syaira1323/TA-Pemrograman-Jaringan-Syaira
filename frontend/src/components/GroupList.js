import React, { useState, useEffect } from 'react';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  const fetchGroups = async () => {
    const response = await fetch('http://localhost:5000/api/kpop');
    const data = await response.json();
    setGroups(data);
  };

  const deleteGroup = async (id) => {
    await fetch(`http://localhost:5000/api/kpop/${id}`, { method: 'DELETE' });
    fetchGroups();
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div>
      <h2>Group List</h2>
      <ul>
        {groups.map((group) => (
          <li key={group._id}>
            {group.name} ({group.debutYear}) - {group.members} members, Fandom: {group.fandom}
            <button onClick={() => deleteGroup(group._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
