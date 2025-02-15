import { StaticImageData } from 'next/image';
import pasSanniImage from '@/assets/images/about/pastors/pastor-sanni.webp';
import mamaTomiImage from '@/assets/images/about/pastors/mama-tomi.webp';
import pasemmaImage from '@/assets/images/about/pastors/pasemma.webp';
import pastoluImage from '@/assets/images/about/pastors/pastoluImage.webp';
import pasadesolaImage from '@/assets/images/about/pastors/pasadesola.webp';
import pasadeyemoImage from '@/assets/images/about/pastors/pastor-adeyemo.webp';
import pasbabatopeImage from '@/assets/images/about/pastors/pas-babatope.webp';
import pasomotoshoImage from '@/assets/images/about/pastors/pas-omotosho.webp';

export type PastorType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export const pastorData: PastorType[] = [
  {
    image: pasSanniImage,
    name: 'PASTOR SHOLA SANNI',
    title: 'Senior Pastor',
  },
  {
    image: mamaTomiImage,
    name: 'PASTOR (MRS) EYITOMILAYO SANNI',
    title: 'Pastor',
  },
  {
    image: pasadeyemoImage,
    name: 'Mummy. Adeyemo',
    title: 'Pastor',
  },
  {
    image: pasomotoshoImage,
    name: 'A/P ADEWALE OMOTOSHO',
    title: 'Pastor',
  },
  {
    image: pasbabatopeImage,
    name: 'A/P BABATOPE OGUNLOKUN',
    title: 'Pastor',
  },
  {
    image: pastoluImage,
    name: 'PASTOR (MRS.) TOLULOPE OGUNLOKUN',
    title: 'Pastor',
  },
  {
    image: pasadesolaImage,
    name: 'PASTOR (MRS.) ADESOLA OLUBUKOLA',
    title: 'Pastor',
  },
  {
    image: pasemmaImage,
    name: 'PASTOR EMMANUEL EGBOJA',
    title: 'Pastor',
  },
];
