import React from "react";
import logo from "../img/streetliftingcompanion.webp";
export default function MainPage() {
	return (
		<div className='main-page'>
			<div>
				<img src={logo} alt='Streetlifting Companion Logo' className="app-logo" />
			</div>
			<button
				type='button'
				className='collapsible'
				onClick={() => {
					const collapsibleDiv = document.querySelector(".collapsible-div");
					collapsibleDiv.style.display =
						collapsibleDiv.style.display === "flex" ? "none" : "flex";
				}}
			>
				Privacy Policy for Streetlifting Companion
			</button>
			<div className='collapsible-div'>
				<div className='paragraph'>
					<h2>Privacy Policy for Streetlifting Companion</h2>
					This Privacy Policy governs the manner in which Streetlifting
					Companion collects, uses, maintains, and discloses information
					collected from users of the Streetlifting Companion mobile application
					("App").
				</div>
				<div className='paragraph'>
					<h3>Personal Identification Information</h3>
					<p>
						Streetlifting Companion may collect personal identification
						information from users in various ways, including, but not limited
						to, when users create trainings, use features within the App, and
						interact with certain activities or services available within the
						App. We will collect personal identification information from users
						only if they voluntarily submit such information to us. Users can
						always refuse to supply personally identification information,
						except that it may prevent them from engaging in certain App-related
						activities.
					</p>
				</div>
				<div className='paragraph'>
					<h3>Non-Personal Identification Information</h3>
					<p>
						Streetlifting Companion may collect non-personal identification
						information about users whenever they interact with the App.
						Non-personal identification information may include the type of
						device and technical information about users' means of connection to
						the App, such as the operating system and the Internet service
						providers utilized and other similar information.
					</p>
				</div>
				<div className='paragraph'>
					<h3>How We Use Collected Information</h3>
					<p>
						Streetlifting Companion may collect and use users' personal
						information for the following purposes:
					</p>
					<p>
						To improve customer service: Information you provide helps us
						respond to your customer service requests and support needs more
						efficiently.
					</p>
					<p>
						To personalize user experience: We may use information in the
						aggregate to understand how our users as a group use the services
						and resources provided in the App.
					</p>
					<p>
						To improve the App: We may use feedback you provide to improve our
						products and services.
					</p>
					<p>
						To send periodic emails: We may use the email address to respond to
						their inquiries, questions, and/or other requests.
					</p>
				</div>
				<div className='paragraph'>
					<h3>How We Protect Your Information</h3>
					<p>
						We adopt appropriate data collection, storage, and processing
						practices and security measures to protect against unauthorized
						access, alteration, disclosure, or destruction of your personal
						information, username, password, transaction information, and data
						stored in the App.
					</p>
				</div>
				<div className='paragraph'>
					<h3>Changes to This Privacy Policy</h3>
					<p>
						Streetlifting Companion has the discretion to update this privacy
						policy at any time. When we do, we will revise the updated date at
						the bottom of this page. We encourage users to frequently check this
						page for any changes to stay informed about how we are helping to
						protect the personal information we collect. You acknowledge and
						agree that it is your responsibility to review this privacy policy
						periodically and become aware of modifications.
					</p>
				</div>
				<div className='paragraph'>
					<h3>Your Acceptance of These Terms</h3>
					<p>
						By using this App, you signify your acceptance of this policy. If
						you do not agree to this policy, please do not use our App. Your
						continued use of the App following the posting of changes to this
						policy will be deemed your acceptance of those changes.
					</p>
				</div>
				<div className='paragraph'>
					<h3>Contacting Us</h3>
					<p>
						If you have any questions about this Privacy Policy, the practices
						of this App, or your dealings with this App, please contact us at:
						danielgauchia@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}
