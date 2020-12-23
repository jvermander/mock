import React, { useState } from 'react';
import './Ads.css';

const learnMoreBigText = 
  <div className='adtext'>
    <strong><em>MOBL</em></strong> offers property managers a  
    <strong style={{color: '#ffdd9e'}}><em>&nbsp;competitive edge</em></strong> into the future to attract 
    and retain residents through our top-tier service offerings in preparation for the 
    <strong style={{color: '#ffdd9e'}}><em>&nbsp;new reality</em></strong>. Therefore, providing 
    property managers and their companies with lucrative 
    <strong style={{color: '#ffdd9e'}}><em>&nbsp;revenue streams</em></strong>.</div>;
const learnMoreBtnText = 'Learn More';

export function AdCarousel() {
  return (
    <div id="carousel" className="carousel slide p-0 m-0" data-ride="carousel" data-interval='4000'>
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div id='carouselinner' className="carousel-inner m-0 p-0">
        <div className="carousel-item active">
          <RightAd bigText={learnMoreBigText} btnText={learnMoreBtnText} id='learnmore'/>
        </div>
        <div className="carousel-item">
          <LeftAd bigText={loremipsum} btnText='Lorem Ipsum' id='placeholder1'/>         
        </div>
        <div className="carousel-item">
          <RightAd bigText={loremipsum} btnText='Lorem Ipsum' id='placeholder2'/>         
        </div>
     </div>
    </div>
  );
}

type PlaceholderAdProps = {
  bigText: any,
  btnText: string,
  id: string;
}

const loremipsum = <div className='adtext'>Lorem ipsum dolor sit amet 
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

function LeftAd({ bigText, btnText, id }: PlaceholderAdProps) {
  return (
    <div id={id} className='ad row align-items-center m-0'>
      <div className='p-5 col-6 m-0'>
        <div className='my-2 text-left'>{bigText}</div>
        <button className='my-2 btn btn-dark btn-lg float-left'>{btnText}</button>  
      </div>
    </div>
  );
}

function RightAd({ bigText, btnText, id }: PlaceholderAdProps) {
  return (
    <div id={id} className='ad row align-items-center justify-content-end m-0'>
      <div className='p-5 col-6 m-0'>
        <div className='my-2 text-right'>{bigText}</div>
        <button className='my-2 btn btn-dark btn-lg float-right'>{btnText}</button>  
      </div>
    </div>
  );
}

const signUpBigText: string = 'Create new revenue streams. Hassle-free.';
const signUpSmallText: string = 'MOBL is 100% free to use and easy to manage by property managers. \
We make it easy to generate new revenues with minimal time commitments. \
Therefore, allowing you to focus on your residents while creating new financial opportunities hassle-free.';
const signUpBtnText: string = 'Sign Up';

export function SignUpAd() {
  return (
    <div id='signup' className='row align-items-center m-0 pb-5'>
      <Modal/>
      <div className='p-5 col-5'>
        <div className='my-2' style={{color: 'navy', fontSize: '30px'}}><strong>{signUpBigText}</strong></div>
        <div className='my-2' style={{color: 'navy', fontSize: '18px'}}>{signUpSmallText}</div>
        <button className='my-2 btn btn-dark btn-lg' data-toggle='modal' data-target='#modal'>{signUpBtnText}</button>
      </div>
    </div>
  );
}

function Modal() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const onSubscribe = () => {
    setIsSubscribed(true);
    // left todo
  }

  const modalContent = isSubscribed?
    <>
      <span>Thanks for subscribing! You'll receive an e-mail shortly.</span>
    </> :
    <>
      <span>What's your e-mail address?</span>
      <form id='email' onSubmit={onSubscribe}>
        <input type="email" style={{width: '100%'}}></input>
      </form>
    </>;

  return (
    <div className="modal fade" id="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Subscribe to our mailing list for weekly updates!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {modalContent}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" form='email' className="btn btn-primary" style={{display: isSubscribed? 'none' : 'block'}}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.onresize = normalizeCarousel;

function normalizeCarousel() {
  let items = document.getElementsByClassName('ad');
  let maxHeight = 0;
  for(let i = 0; i < items.length; i++) {
    (items[i] as HTMLElement).style.height = 'auto';
  }

  for(let ad in items) {
    if(items[ad].clientHeight > maxHeight) {
      maxHeight = items[ad].clientHeight;
    }
  }
  console.log('MAX HEIGHT: ' + maxHeight);
  for(let i = 0; i < items.length; i++) {
    (items[i] as HTMLElement).style.height = maxHeight.toString() + 'px';
  }
}
