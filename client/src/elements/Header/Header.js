import React from 'react';
import './Header.css';

function Header() {
	return (
		<header className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" />

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

					</ul>

					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="form">
						<input type="email" className="form-control form-control-dark text-bg-dark" placeholder="Email..." aria-label="Email" />						
					</form>

					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="form">						
						<input type="password" className="form-control form-control-dark text-bg-dark" placeholder="Password..." aria-label="Password" />
					</form>

					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">Log in</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
