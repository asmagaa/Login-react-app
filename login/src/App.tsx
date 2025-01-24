import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom' // Use NavLink
import Preferences from './components/Preferences'
import ChangePassword from './components/Password'
import AccountSettings from './components/Account'
import './App.css'

const App: React.FC = () => {
	return (
		<Router>
			<div className='panel-container'>
				<nav>
					<NavLink to='/account-settings' className={({ isActive }) => (isActive ? 'active' : '')}>
						Account Settings
					</NavLink>
					<NavLink to='/change-password' className={({ isActive }) => (isActive ? 'active' : '')}>
						Change Password
					</NavLink>
					<NavLink to='/preferences' className={({ isActive }) => (isActive ? 'active' : '')}>
						Preferences
					</NavLink>
				</nav>
				<div className='main-content'>
					<Routes>
						<Route path='/account-settings' element={<AccountSettings />} />
						<Route path='/change-password' element={<ChangePassword />} />
						<Route path='/preferences' element={<Preferences />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
