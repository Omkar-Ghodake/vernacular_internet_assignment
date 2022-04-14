import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Menu = () => {

	const location = useLocation()

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column mx-auto">
							<Link className="navbar-brand" to="/"><span className='color-blue'>Mentor</span><span className='color-red'>Plus</span></Link>
							<li className={`nav-item rounded mb-2 mt-1 text-center ${location.pathname === '/' && 'current'}`}>
								<Link className="nav-link" aria-current="page" to="/">Home</Link>
							</li>
							<li className={`nav-item rounded mb-2 mt-1 text-center ${location.pathname === '/profile' && 'current'}`}>
								<Link className="nav-link" to="/profile">Profile</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Menu