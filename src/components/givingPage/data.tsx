import fcmbIcon from '@/assets/images/giving/jubilee.svg';
//import fbnIcon from '@/assets/images/giving/first-bank.svg';
import gtbIcon from '@/assets/images/giving/gtb.svg';
//import ubaIcon from '@/assets/images/giving/uba.svg';
//import zenithIcon from '@/assets/images/giving/zenith.svg';
import { StaticImageData } from 'next/image';

const offlineChannels: {
  color: string;
  icon: StaticImageData;
  accountName: string;
  accountNumber: string;
}[] = [
  {
    accountName: "RCCG FAITH SANCTUARY",
    accountNumber: '177 189 2589 ',
    color: '#5A0B4D',
    icon: gtbIcon,
  },
  {
    accountName: "RCCG FAITH SANCTUARY",
    accountNumber: '000 047 1426',
    color: '#5A0B4D',
    icon: fcmbIcon,
    },
  /*
  {
    accountName: "RCCG FAITH SANCTUARY",
    accountNumber: '101 6346 517',
    color: '#D61B0C',
    icon: ubaIcon,
  },
  {
    accountName: "RCCG FAITH SANCTUARY",
    accountNumber: '202 1398 890',
    color: '#03476E',
    icon: fbnIcon,
  },
  {
    accountName: "RCCG FAITH SANCTUARY",
    accountNumber: '101 0811 367',
    color: '#808285',
    icon: zenithIcon,
  },
  */
];

export default offlineChannels;
