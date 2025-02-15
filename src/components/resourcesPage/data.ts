import { StaticImageData } from 'next/image';
import mixlrImage from '@/assets/images/resources/streaming-channels/mixlr.svg';
import facebookImage from '@/assets/images/resources/streaming-channels/facebook.svg';
import youtubeImage from '@/assets/images/resources/streaming-channels/youtube.svg';

interface StreamChannel {
  image: StaticImageData;
  link: string;
}

export const streamingChannels: StreamChannel[] = [
  {
    image: youtubeImage,
    link: 'https://youtube.com/@rccgfsplp7769?si=NaN_wulbgtXjSHoL',
  },
  {
    image: facebookImage,
    link: 'https://web.facebook.com/faithsanctuaryparish.lagos.75',
  },
  {
    image: mixlrImage,
    link: 'https://mixlr.com/',
  },
];
