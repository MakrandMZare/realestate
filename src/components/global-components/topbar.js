import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class TopBar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
          <div className="ltn__header-top-area section-bg-6">
			<div className="container">
				<div className="row">
				<div className="col-md-7">
					<div className="ltn__top-bar-menu">
					<ul>
						<li><a href="mailto:gopal@gopalstudio.in?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> Gopal Studio</a></li>
						<li><a href="locations.html"><i className="icon-placeholder" /> Ahmedabad</a></li>
					</ul>
					</div>
				</div>
				<div className="col-md-5">
					<div className="top-bar-right text-end">
					<div className="ltn__top-bar-menu">
						<ul>
						
						<li>
							{/* ltn__social-media */}
							<div className="ltn__social-media">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
								<li><a href="#" title="Dribbble"><i className="fab fa-dribbble" /></a></li>
							</ul>
							</div>
						</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
        )
    }
}


export default TopBar