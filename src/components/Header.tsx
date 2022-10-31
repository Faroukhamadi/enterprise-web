import type { FunctionComponent } from 'preact';

// make optional prop later
export const Header: FunctionComponent<{ language?: 'EN' | 'FR' }> = ({
	language,
}) => {
	if (!language) {
		language = 'FR';
	}

	if (language === 'EN') {
		console.log('Hello');
	} else if (language === 'FR') {
		console.log('Bonjour');
	}

	return (
		<div className="navbar bg-base-100 sticky bg-transparent text-white top-0 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-black"
					>
						<li>
							<a>à propos</a>
						</li>
						<li>
							<a>nos projets</a>
						</li>
						<li>
							<a>nos activitées</a>
						</li>
						<li>
							<a>location</a>
						</li>
						<li>
							<a>contactez-nous</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">KMC</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li tabIndex={0}>
						<a className="uppercase">
							à propos
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 text-black bg-white">
							<li>
								<a>Présentation</a>
							</li>
							<li>
								<a>Mission, vision et valeurs</a>
							</li>
							<li>
								<a>Certificats</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="uppercase">nos projets</a>
					</li>
					<li tabIndex={0}>
						<a className="uppercase">
							nos produits
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 text-black bg-white">
							<li>
								<a>Échafaudage</a>
							</li>
							<li>
								<a>Étaiement</a>
							</li>
							<li>
								<a>Coffrage</a>
							</li>
							<li>
								<a>Catalogue</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="uppercase">nos activitées</a>
					</li>
					<li>
						<a className="uppercase">location</a>
					</li>
					<li tabIndex={0}>
						<a className="uppercase">
							contactez-nous
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 text-black bg-white">
							<li>
								<a>Contact</a>
							</li>
							<li>
								<a>Demander un devis</a>
							</li>
							<li>
								<a>Carriére</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{language === 'EN' ? (
					<a className="btn btn-ghost normal-case text-xl">FR</a>
				) : (
					<a className="btn btn-ghost normal-case text-xl">EN</a>
				)}
			</div>
		</div>
	);
};
