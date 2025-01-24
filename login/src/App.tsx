import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import ChangePassword from './components/Password'
import AccountSettings from './components/Account'
import Preferences from './components/Preferences'
import './App.css'

const App: React.FC = () => {
	return (
		<Router>
			<div className='panel-container'>
				<nav>
					<NavLink to='/account-settings' activeClassName='active'>
						Account Settings
					</NavLink>
					<NavLink to='/change-password' activeClassName='active'>
						Change Password
					</NavLink>
					<NavLink to='/preferences' activeClassName='active'>
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
