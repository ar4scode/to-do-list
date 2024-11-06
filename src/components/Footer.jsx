import Logos from "./Logos"

function Footer() {
  return (
    <footer>
      <div className="text-content">
        <p>Author:<span> Ar4sCode</span></p>
        <p className="project-info">Look for more Projects: Follow My <a href="https://github.com/ar4scode">Github</a></p>
      </div>

      <div className="logo-container">
        <Logos socialLink="https://github.com/ar4scode" appLogo={<i className="fa-brands fa-github"></i>}/>
        <Logos socialLink="https://www.linkedin.com/in/ar4scode" appLogo={<i class="fa-brands fa-linkedin"></i>}/>
        <Logos socialLink="https://www.instagram.com/_arasazizi/" appLogo={<i class="fa-brands fa-instagram"></i>}/>
      </div>
    </footer>
  )
}

export default Footer;