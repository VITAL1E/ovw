import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="ownvibe">
        <a
          target="_blank"
          href="https://www.instagram.com/ownvibe.app/"
          rel="noopener noreferrer"
        >
          <div className="footer-icon ig-icon hover-icon-click"></div>
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@ownvibe.app"
          rel="noopener noreferrer"
        >
          <div className="footer-icon tiktok-icon hover-icon-click"></div>
        </a>
        {/* <NavLink to="/terms">
          <p>Terms</p>
        </NavLink>
        <NavLink to="/support">
          <p>Support</p>
        </NavLink> */}

        <p className="grey">@2022 OWNVIBE 🤓</p>
      </section>
      <a
        target="_blank"
        href="https://www.producthunt.com/posts/ownvibe"
        rel="noopener noreferrer"
        className="ph-link"
      >
        <section className="producthunt hover-icon-click"></section>
      </a>
    </footer>
  );
};

export default Footer;
