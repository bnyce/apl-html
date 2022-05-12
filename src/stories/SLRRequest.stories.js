import { getSLRRequestString } from './SLRRequest';
import './uswds.css';
import './SLRRequest.css';
import './room-options.css';

export default {
  title: 'SLRs/SLR Request',
 
 argTypes: {
//  label: { control: 'text' },
//  onClick: { action: 'onClick' },
    internal: { control: 'boolean' },
/*    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, */
  },
  
};

const Template = ({ label, ...args }) => {
  return createSLRRequest({ label, ...args });
};

export const SLRRequest = () => getSLRRequestString();