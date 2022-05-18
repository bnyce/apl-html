import { getSLRRequestString, getSLRCalendarString, getSLRConfirmationString, getSLRConfirmedString } from './SLRRequest';
import './uswds.css';
import './SLRRequest.css';
import './room-options.css';
import './slr-calendar.css';

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
export const SLRCalendar = () => getSLRCalendarString();
export const SLRConfirmation = () => getSLRConfirmationString();
export const SLRConfirmed = () => getSLRConfirmedString();

