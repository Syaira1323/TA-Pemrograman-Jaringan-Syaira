import React from 'react';
import GroupList from './components/GroupList';
import GroupForm from './components/GroupForm';

function App() {
  return (
    <div>
      <h1>K-Pop Group Manager</h1>
      <GroupForm />
      <GroupList />
    </div>
  );
}

export default App;
