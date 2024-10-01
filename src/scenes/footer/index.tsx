import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-biege py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Transform your body and mind with expert-led fitness programs and a supportive community. Achieve your fitness goals with us!
          </p>
          <p>© 2024 Zenfit All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook </p>
          <p className="my-5">Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Algiers City Center, Algiers, Algeria</p>
          <p>(+213)525682588</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;