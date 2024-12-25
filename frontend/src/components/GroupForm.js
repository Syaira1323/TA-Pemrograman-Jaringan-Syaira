import React, { useState } from 'react';

const GroupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    debutYear: '',
    members: '',
    fandom: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/kpop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Group added successfully!');
      setFormData({ name: '', debutYear: '', members: '', fandom: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Group Name" value={formData.name} onChange={handleChange} />
      <input type="number" name="debutYear" placeholder="Debut Year" value={formData.debutYear} onChange={handleChange} />
      <input type="number" name="members" placeholder="Members" value={formData.members} onChange={handleChange} />
      <input type="text" name="fandom" placeholder="Fandom Name" value={formData.fandom} onChange={handleChange} />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default GroupForm;
