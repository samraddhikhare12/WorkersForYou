import React from 'react';
import './Contact.css';

;

export default function ContactUs() {
  return (
    <>
    
    <main role="main">
      <header class="section background-dark">
        <div class="line">        
          <h1 class="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Contact Us</h1>
         
        </div>  
      </header>
      <div class="section background-white"> 
        <div class="line margin-bottom-60">
          <div class="margin">
            <div class="s-12 m-12 l-4 margin-m-bottom">
              
            </div>
            <div class="s-12 m-12 l-4 margin-m-bottom">
              <div class="padding-2x block-bordered border-radius">
                <div class="float-left hide-s">
                  <i class="icon-sli-envelope icon3x text-primary"></i>
                </div>
                <div class="margin-left-70 margin-s-left-0 margin-bottom">
                  <h3 class="margin-bottom-0">E-mail</h3>
                  <p>samraddhi30oct@gmail.com<br></br>
                     pandeySurbhi@gmail.com<br></br>
                     vineet121@gmail.com
                  </p>              
                </div>
              </div>
            </div>
            <div class="s-12 m-12 l-4 margin-m-bottom">
              <div class="padding-2x block-bordered border-radius">
                <div class="float-left hide-s">
                  <i class="icon-sli-phone icon3x text-primary"></i>
                </div>
                <div class="margin-left-70 margin-s-left-0">
                  <h3 class="margin-bottom-0">Phone Numbers</h3>
                  <p><span class="text-primary">9770325453</span><br></br>
                     Office: 704930113<br></br>
                     Office 2: 0798 6546 465 15
                  </p>             
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="line">
          <div class="margin">
          
            <div class="s-12 m-12 l-6">
              <h2 class="margin-bottom-10">Leave Message</h2>
              <form name="contactForm" class="customform" method="post">
                <div class="line">
                  <div class="margin">
                    <div class="s-12 m-12 l-6">
                      <input name="email" class="required email" placeholder="Your e-mail" title="Your e-mail" type="text" />
                      <p class="email-error form-error">Please enter your e-mail.</p>
                    </div>
                    <div class="s-12 m-12 l-6">
                      <input name="name" class="name" placeholder="Your name" title="Your name" type="text" />
                      <p class="name-error form-error">Please enter your name.</p>
                    </div>
                  </div>
                </div>
                <div class="s-12"> 
                  <input name="subject" class="subject" placeholder="Subject" title="Subject" type="text" />
                  <p class="subject-error form-error">Please enter the subject.</p>
                </div>
                <div class="s-12">
                  <textarea name="message" class="required message" placeholder="Your message" rows="3"></textarea>
                  <p class="message-error form-error">Please enter your message.</p>
                </div>
                <div class="s-12"><button class="s-12 submit-form button background-primary text-white" type="submit">Submit Button</button></div>
              </form>
            </div>
            
    
              {/* <div class="s-6">
                <p class="text-size-16">
                Monday<br>
                Tuesday<br>
                Wednesday<br>
                Thursday<br>
                Friday<br>
                Saturday<br>
                Sunday
                </p>
              </div> */}
              {/* <div class="s-6">
                <p class="text-size-16 text-strong">
                08.00-18.00<br>
                08.00-18.00<br>
                08.00-18.00<br>
                08.00-18.00<br>
                08.00-14.00<br>
                08.00-14.00<br>
                Close
                </p> */}
              </div>
            </div>
          </div>
      
    
  </main>
  
  </>
  )
}
