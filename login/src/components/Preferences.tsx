import React, { useState } from 'react'

const Preferences: React.FC = () => {
	const [notificationFrequency, setNotificationFrequency] = useState<string>('All')
	const [collectData, setCollectData] = useState<boolean>()
	const [frequencyValue, setFrequencyValue] = useState<number>()

	const handleSave = () => {
		console.log({ notificationFrequency, collectData, frequencyValue })
	}

	return (
		<div className='panel'>
			<h2>Notification Settings</h2>
			<select value={notificationFrequency} onChange={e => setNotificationFrequency(e.target.value)}>
				<option value='All'>All</option>
				<option value='Important'>Only Important</option>
			</select>

			<div className='slider-container'>
				<label>Notification Frequency</label>
				<input
					type='range'
					min='0'
					max='100'
					value={frequencyValue}
					onChange={e => setFrequencyValue(Number(e.target.value))}
				/>
				<span>{frequencyValue}%</span>
			</div>

			<label>
				<input type='checkbox' checked={collectData} onChange={e => setCollectData(e.target.checked)} />
				Collect additional data
			</label>

			<button onClick={handleSave}>Save preferences</button>
		</div>
	)
}

export default Preferences
