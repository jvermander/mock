import React from 'react';
import './Listinfo.css';

import { RiseOutlined, LikeOutlined, HeartOutlined, WarningOutlined } from '@ant-design/icons';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export function ListInfo() {
  return (
    <div className='row my-3 mx-0'>
      <FancyList/>
      <SimpleList/>
    </div>
  );
}

const serviceGroupsLeft = [
  {title: 'Sports/Active Living', 
  services: [['Skate Sharpening', true], 'Equipment Deodorizing', 'Health & Fitness Program Consultants', 'Yoga']},

  {title: 'Auto',
  services: [['Oil Change', true], ['Car Wash/Detailing', true]]},

  {title: 'Electronics',
  services: ['Device Repair', 'Computer Repair']},

  {title: 'Clothing',
  services: [['Dry Cleaning', true], 'Tailoring', 'Shoe Repair', 'Personal Shopping']},
];

const serviceGroupsRight = [
  {title: 'Wellness',
  services: ['Massage', 'Dietitians', 'Homepath', 'Counselling', 'Optometrist', 'Chiropractor']},

  {title: 'Personal Service',
  services: ['Fashion Consultants', ['Hair', true], 'Financial Advisor', 'Spa Services', 'Event Planning', 'Photo Development', 'Manicure', 'Pedicure']}
];

function jsonToHTML(json: any) {
  return json.map((group: any) => {
    let services = group.services.map((service: any) => {

      if(service instanceof Array && service[1]) 
        return <div className='simplelistitem'><CheckCircleOutlineIcon className='mr-1'/>{service[0]}</div>
      else
        return <div className='simplelistitem'><RadioButtonUncheckedIcon className='mr-1'/>{service}</div>
    });
    return <div className='mt-3'>
      <strong>{group.title}</strong>
      {services}
    </div>
  });
}


function SimpleList() {

  const left = jsonToHTML(serviceGroupsLeft);
  const right = jsonToHTML(serviceGroupsRight);

  return (
    <div id='simplelist' className='col-5 my-5 ml-auto pr-5' style={{color: '#496bb9', fontFamily: 'larke'}}>
      <div className='text-right' style={{fontSize: '20px', color: 'grey'}}>
        MOBL provides you with access to our platform of <strong style={{fontFamily: 'larkeb'}}><em>premium-service providers</em></strong>, 
        such as car washing & detailing, oil changing, haircutting, skate sharpening, and dry-cleaning businesses, 
        who are available to arrange site visits with your residents in the comfort of their homes — creating the 
        <strong style={{fontFamily: 'larkeb'}}><em>&nbsp;ultimate value-add</em></strong> condominium experience.</div>
      <div className='mt-5'>
        <div className='row' style={{fontSize: '36px'}}>Example Services</div>
        <div className='row' style={{fontSize: '18px'}}>
          <div className='col m-1 p-0'>
              {left}
          </div>
          <div className='col ml-1 p-0'>
              {right}
          </div>
        </div>
      </div>
    </div>
  );
}

function FancyList() {
  const iconSize: string = '6em';

  return (
    <div className='col-6' style={{fontFamily: 'larker'}}>
      <div className='listitem row my-5 p-3'>
          <RiseOutlined className='distort' style={{fontSize: iconSize, color: 'white'}}/>
        <div className='col'>
          <div style={{fontSize: '25px'}}><strong>Maintain a competitive edge within the real estate market.</strong></div>
          <div>You can promote your property’s benefits, as well as your resident retention rates & satisfaction levels.</div>
        </div>
      </div>
      <div className='listitem row my-5 p-3'>
        <LikeOutlined className='twitch' style={{fontSize: iconSize, color: 'white'}}/>
        <div className='col'>
          <div style={{fontSize: '25px'}}><strong>Simple, easy and convenient.</strong></div>
          <div>
            Experience peace of mind as MOBL’s platform automates all scheduling, reminders, and transactions. 
            Simply create a booking and share the link out to your residents, 
            therefore creating the ultimate at-home experience while minimizing unnecessary travel.
          </div>
        </div>
      </div>
      <div className='listitem row my-5 p-3'>
        <HeartOutlined className='bounce' style={{fontSize: iconSize, color: 'white'}}/>
        <div className='col'>
          <div style={{fontSize: '25px'}}><strong>Attract new residents while retaining existing ones.</strong></div>
          <div>
            The value-adds and premium amenities 
            provided by your condominium will serve as a key differentiator 
            to set your property apart from the competition.
          </div>
        </div>
      </div>
      <div className='listitem row my-5 p-3'>
        <WarningOutlined className='jumble' style={{fontSize: iconSize, color: 'white'}}/>
        <div className='col'>
          <div style={{fontSize: '25px'}}><strong>Increased safety for you and your residents.</strong></div>
          <div>
            Your residents will make appointments — even during the pandemic — 
            thus, removing the need to wander out in public decreases the risk of exposure to COVID.
          </div>
        </div>
      </div>
    </div>
  );
}