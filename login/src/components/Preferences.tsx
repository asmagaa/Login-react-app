import React, { useState } from 'react';

const Preferences: React.FC = () => {
  const [notificationFrequency, setNotificationFrequency] = useState<string>('All');
  const [collectData, setCollectData] = useState<boolean>(false);

  const handleSave = () => {
    console.log({ notificationFrequency, collectData });
  };

  return (
    <div>
      <h2>Notification Settings</h2>
      <select value={notificationFrequency} onChange={(e) => setNotificationFrequency(e.target.value)}>
        <option value="All">All</option>
        <option value="1">Cos tam #1</option>
        <option value="2">Cos tam #2</option>
        <option value="3">Cos tam #3</option>
      </select>
      <label>
        <input type="checkbox" checked={collectData} onChange={(e) => setCollectData(e.target.checked)} />
        Collect additional data
      </label>
      <button onClick={handleSave}>Save preferences</button>
    </div>
  );
};

export default Preferences;