import { Container, Content, Main} from './styles'

import icon1Img from '../../assets/img/icon-font-1.png'
import icon2Img from '../../assets/img/icon-font-2.png'
import icon3Img from '../../assets/img/icon-font-3.png'
import icon4Img from '../../assets/img/icon-font-4.png'
import icon5Img from '../../assets/img/icon-font-5.png'
import icon6Img from '../../assets/img/icon-font-6.png'

import Header from '../../Components/Header'
import MenuSlider from '../../Components/MenuSlider'
import Newsletter from '../../Components/Newsletter'
import Footer from '../../Components/Footer'

export default function Home(){

    return(
        <Container>
            <Content>
                <Header />
                <MenuSlider />

                <Main>
                    <section className="features">
                        <div className="features__container">

                            <div className="features__container-title">
                                <h2>Tinyone features</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                            </div>

                            <div className="features__container-show1">

                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon1Img} alt="Image1" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            Fully Responsive
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>

                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon2Img} alt="Image2" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            Fully Layered PSD
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>

                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon3Img} alt="Image3" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            Font Awesome Icons
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="features__container-show2">
                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon4Img} alt="Image4" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            HTML3 & CSS3
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>

                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon5Img} alt="Image5" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            Email Template
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>

                                <div className="features-item">
                                    <div className="image">
                                        <img src={icon6Img} alt="Image6" />
                                    </div>
                                    <div className="description">
                                        <h3>
                                            Free to download
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Main>
                <Newsletter />
                <Footer />

            </Content>
        </Container>
    )
}