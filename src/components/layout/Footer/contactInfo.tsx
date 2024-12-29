import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: '30 Ibari St, off Iju Road, Ifako Agege, Lagos.',
    alt: 'Address',
  },
  {
    icon: Email,
    text: 'rccgfaithsanctuary@gmail.com',
    type: 'email',
    alt: 'Email',
  },
  {
    icon: Phone,
    text: '+234 805 669 9920',
    type: 'phone',
    alt: 'Phone',
  },
];

export default contactInfo;
