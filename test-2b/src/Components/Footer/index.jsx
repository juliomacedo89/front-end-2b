import { Container, Content } from './styles'

import toTopImg from '../../assets/img/toTop.png'

export default function Footer(){

    function toTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <Container>
            <Content>
                <div className="company-information">
                    <p>HALOVIETNAM LTD</p>
                    <p>66, Dang Van ngu, Dong Da</p>
                    <p className="adrees-margin">Hanoi, Vietnam</p>
                    <a href="mailto:contact@halovietnam.com">contact@halovietnam.com</a>
                    <a href="tel:+84435149182">+844 35149182</a>
                </div>
                <div className="footer-interaction">
                    <div className="interaction-item">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#footer">Examples</a>
                                </li>
                                <li>
                                    <a href="#footer">Shop</a>
                                </li>
                                <li>
                                    <a href="#footer">License</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="interaction-item">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#footer">Contact</a>
                                </li>
                                <li>
                                    <a href="#footer">About</a>
                                </li>
                                <li>
                                    <a href="#footer">Privacy</a>
                                </li>
                                <li>
                                    <a href="#footer">Terms</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="interaction-item">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#footer">Download</a>
                                </li>
                                <li>
                                    <a href="#footer">Support</a>
                                </li>
                                <li>
                                    <a href="#footer">Documents</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="interaction-item">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#footer">Media</a>
                                </li>
                                <li>
                                    <a href="#footer">Blog</a>
                                </li>
                                <li>
                                    <a href="#footer">Forums</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Content>
            <div className="toTop">
                <img src={toTopImg} alt="Topo" onClick={toTop} />
            </div>
        </Container>
    )
}