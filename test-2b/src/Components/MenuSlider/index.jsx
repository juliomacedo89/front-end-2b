import { Container, Content } from './styles'

import appleImg from '../../assets/img/icon-fa-apple.png'
import androidImg from '../../assets/img/icon-fa-android.png'
import windowsImg from '../../assets/img/icon-fa-windows.png'
import ipadYellowImg from '../../assets/img/ipad-yellow.png'
import ipadGreenImg from '../../assets/img/ipad-green.png'
import ipadRedImg from '../../assets/img/ipad-red.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


export default function MenuSlider(){

    return(

        <Container>
            <Content>
                <Carousel
                autoPlay= "true"
                infiniteLoop= "true"
                interval= "2000"
               
                >
                    <div className="interaction-slider">
                        <div className="description">
                            <h2>Inspire your inspiration</h2>
                            <h3>Simple to use for your app, products showcase and your inspiration</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>

                            <div className="description-system">
                                <ul>
                                    <li>
                                        <img src={appleImg} alt="Apple" />
                                    </li>
                                    <li>
                                        <img src={androidImg} alt="Android" />
                                    </li>
                                    <li>
                                        <img src={windowsImg} alt="Windows" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="slider-img">
                            <img src={ipadYellowImg} alt="Ipad" />
                        </div>
                    </div>

                    <div className="interaction-slider">
                        <div className="description">
                            <h2>Inspire your inspiration</h2>
                            <h3>Simple to use for your app, products showcase and your inspiration</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>

                            <div className="description-system">
                                <ul>
                                    <li>
                                        <img src={appleImg} alt="Apple" />
                                    </li>
                                    <li>
                                        <img src={androidImg} alt="Android" />
                                    </li>
                                    <li>
                                        <img src={windowsImg} alt="Windows" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="slider-img">
                            <img src={ipadGreenImg} alt="Ipad" />
                        </div>
                    </div>

                    <div className="interaction-slider">
                        <div className="description">
                            <h2>Inspire your inspiration</h2>
                            <h3>Simple to use for your app, products showcase and your inspiration</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>

                            <div className="description-system">
                                <ul>
                                    <li>
                                        <img src={appleImg} alt="Apple" />
                                    </li>
                                    <li>
                                        <img src={androidImg} alt="Android" />
                                    </li>
                                    <li>
                                        <img src={windowsImg} alt="Windows" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="slider-img">
                            <img src={ipadRedImg} alt="Ipad" />
                        </div>
                    </div>
                </Carousel>
            </Content>
        </Container>
    )
}