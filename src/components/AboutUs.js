import React from 'react';
import './AboutUs.css';

export default function AboutUs() {

	return (
		<>
		
			<div className='my-3'>
				<section className="banner-area relative">
					<div className="container">
						<div className="row d-flex align-items-center justify-content-center">
							<div className="about-content col-lg-12">
								<h1 className="text-white">About Us</h1>

							</div>
						</div>
					</div>
				</section>
				<section className="about-area section-gap">
					<div className="container">
						<div className="row align-items-center justify-content-start">
							<div className="col-lg-5 about-left">
								<img className="img-fluid" src="https://www.hamarimajdoori.com/wp-content/uploads/2021/12/maid-services-hamarimajdoori-1.jpg" alt="" />
							</div>
							<div className="offset-lg-1 col-lg-5 col-md-12 about-right">
								<div className="section-title">
									<h2 className="mb-4">Lets <br />
										Introduce About Us</h2>
								</div>
								<div className="mb-35 wow fadeIn" data-wow-duration=".8s" data-wow-delay=".3s">
									<p>
										Maid Seekers offers you in house dedicated workers to suit both Commercial & Residential needs. A full description of our services is offered below. We offer weekly, monthly, hourly home worker service intervals with long-term contracts.
									</p>
									<p>It is quite an obvious advantage. Even though due to the COVID 19 the whole nation is on lockdown but many of you sure are working from home. So, instead of you laboring away scouring the toilet floor or wiping the oily kitchen exhausts tube, you can focus on your work and other important business. Leave the cleaning part to our experts. They have loads of experience and are well aware of how to do the work for you.
									</p>
								</div>
								<a href="#" className="primary-btn" data-text="Read More">
									<span>R</span>
									<span>e</span>
									<span>a</span>
									<span>d</span>
									<span></span>
									<span>M</span>
									<span>o</span>
									<span>r</span>
									<span>e</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
			
		</>
	)
}
