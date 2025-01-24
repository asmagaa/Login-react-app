import React, { useState } from 'react'

const AccountSettings: React.FC = () => {
	const [name, setName] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [gender, setGender] = useState<string>('')

	const handleSaveChanges = () => {
		console.log({ name, username, gender })
	}

	return (
		<div>
			<h2>Account Settings</h2>

			<input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />

			<input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />

			<div>
				<label>
					<input type='radio' value='Male' checked={gender === 'Male'} onChange={e => setGender(e.target.value)} />
					Male
				</label>

				<label>
					<input type='radio' value='Female' checked={gender === 'Female'} onChange={e => setGender(e.target.value)} />
					Female
				</label>

				<label>
					<input type='radio' value='Other' checked={gender === 'Other'} onChange={e => setGender(e.target.value)} />
					Other
				</label>

				<label>
					<input
						type='radio'
						value='Helicopter'
						checked={gender === 'Helicopter'}
						onChange={e => setGender(e.target.value)}
					/>
					Helicopter
				</label>
			</div>

			<button onClick={handleSaveChanges}>Save changes</button>
		</div>
	)
}

export default AccountSettings
