import { getAHCFooterString } from './AHCFooter';
//import './ahc.css';

export default {
  title: 'AHC/Footer',
};

const myAHCFooter = getAHCFooterString();

export const AHCFooter = () => myAHCFooter;
