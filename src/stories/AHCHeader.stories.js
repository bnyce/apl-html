import { getAHCHeaderString } from './AHCHeader';

export default {
  title: 'AHC/Header',
};

const myAHCHeader = getAHCHeaderString();

export const AHCHeader = () => myAHCHeader;