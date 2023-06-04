import styles from './GetStarted.module.css';
import image1 from '../../assets/Group1.png';
import image2 from '../../assets/Group2.png';
import image3 from '../../assets/Group5.png';
import image4 from '../../assets/Group3.png';
import image5 from '../../assets/Group 111.png';
import image6 from '../../assets/Group4.png';
import image7 from '../../assets/Mask Group.png';
import image8 from '../../assets/Group 9.png';

export const button = [
  {
    url: '/BrowseInfluencers',
    content: 'GET STARTED',
    buttonType: 'primary',
    buttonShape: 'round'
  }
];

export const paragraphs = [
  {
    text: "Instantly promote your music or brand on TikTok with the click of a button.",
    className: styles.title
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    className: styles.description
  }
];

export const images = [
  { src: image1, alt: 'First', className: styles.FirstImageContainer },
  { src: image2, alt: 'Second', className: styles.SecondImageContainer },
  { src: image3, alt: 'Third', className: styles.ThirdImageContainer },
  { src: image4, alt: 'Fourth', className: styles.FourthImageContainer },
  { src: image5, alt: 'Fifth', className: styles.FifthImageContainer },
  { src: image6, alt: 'Sixth', className: styles.SixthImageContainer },
  { src: image7, alt: 'Seventh', className: styles.SeventhImageContainer },
  { src: image8, alt: 'Eighth', className: styles.EighthImageContainer },
];