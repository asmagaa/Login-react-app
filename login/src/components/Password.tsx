import React, { useState } from 'react'

const ChangePassword: React.FC = () => {
	const [currentPassword, setCurrentPassword] = useState<string>('')
	const [newPassword, setNewPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')

	const handleChangePassword = () => {
		console.log({ currentPassword, newPassword, confirmPassword })
	}

	return (
		<div>
			<h2>Change Password</h2>

			<input
				type='password'
				placeholder='Current password'
				value={currentPassword}
				onChange={e => setCurrentPassword(e.target.value)}
			/>

			<input
				type='password'
				placeholder='New password'
				value={newPassword}
				onChange={e => setNewPassword(e.target.value)}
			/>

			<input
				type='password'
				placeholder='Confirm password'
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
			/>

			<button onClick={handleChangePassword}>Change password</button>
		</div>
	)
}

export default ChangePassword
