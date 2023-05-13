import style from './Footer.module.css';
import Logo from '../Logo/Logo';
import FooterNavBar from './FooterNavBar';
import CopyRight from './CopyRight';

const MyFooter = () => {
  return (
    <div className={style.footerContainer}>
      <Logo LogoWidth={212} LogoHeight={120} LogoStyle={""}/>
      <FooterNavBar />
      <CopyRight />
    </div>
  );
};
export default MyFooter;