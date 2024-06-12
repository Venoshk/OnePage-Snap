import { useEffect, useState } from "react"
import ImageDesktop from "../../assets/images/image-hero-desktop.png"
import ImageMobile from "../../assets/images/image-hero-mobile.png"
import Databiz from "../../assets/images/client-databiz.svg"
import Maker from "../../assets/images/client-maker.svg"
import Audiophile from "../../assets/images/client-audiophile.svg"
import Meet from "../../assets/images/client-meet.svg"
import "./section.css"
import "./Resposividade.css"
export const Section = () => {

  const [imageSrc, setImageSrc] = useState(window.innerWidth <= 768 ? ImageMobile : ImageDesktop);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleResize = () => {
        if(innerWidth <= 768){
            setImageSrc(ImageMobile)
        }else{
            setImageSrc(ImageDesktop)
        }
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <section>
        <div className="container">
            <div className="content">
                <div className="content-text">
                        <h1>
                            <span className="make">Make</span>
                            <span className="remote-work">Remote work</span>
                        </h1>
                    
                    <p>Get your team in sync, no matter your location. Streamline processeses. create team rituals, and watch productivity soar.</p>

                    <button>Lear more</button>

                    <div className="clients">
                        <img src={Databiz} alt="" />
                        <img src={Maker} alt="" />
                        <img src={Audiophile} alt="" />
                        <img src={Meet} alt="" />
                    </div>
                </div>
                <img src={imageSrc} alt="logo" width="500px" height="550px" className="image"/>
            </div>
            
        </div>
    </section>
  )
}
