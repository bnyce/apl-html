import { getAHCFooterString } from './AHCFooter';

export default {
  title: 'AHC/Footer',
};

const myAHCFooter = getAHCFooterString();

export const AHCFooter = () => myAHCFooter;
