import InstagramIcon from '@/assets/svgs/social/instagram.svg';
import FacebookIcon from '@/assets/svgs/social/facebook.svg';
import YoutubeIcon from '@/assets/svgs/social/youtube.svg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: 'Youtube Channel',
    src: YoutubeIcon,
    destination: 'https://youtube.com/@rccgfsplp7769?si=NaN_wulbgtXjSHoL',
  },
  {
    alt: 'Facebook Profile',
    src: FacebookIcon,
    destination: 'https://web.facebook.com/faithsanctuaryparish.lagos.75',
  },
  {
    alt: 'Instagram Profile',
    src: InstagramIcon,
    destination: '#',
  },
];

export default socialLinks;
