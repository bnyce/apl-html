import { createAPLHeader, getFooterString } from './APLFooter';

export default {
  title: 'APL/Footer',
};

const Template = (args) => createAPLFooter(args);

const myFooter = getFooterString();

export const APLFooter = () => myFooter;
