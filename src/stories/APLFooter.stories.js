import { getAPLFooterString } from './APLFooter';

export default {
  title: 'APL/Footer',
};

const myAPLFooter = getAPLFooterString();

export const APLFooter = () => myAPLFooter;
