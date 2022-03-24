import { Container, Content } from './styles'

import facebookImg from '../../assets/img/facebook-ico.png'
import twitterImg from '../../assets/img/twitter-ico.png'
import googleImg from '../../assets/img/google-ico.png'
import pinterestImg from '../../assets/img/pinterest-ico.png'

export default function SocialBar(){

    return(

        <Container>
            <Content>
                <nav>
                    <ul>
                        <li>
                            <a href="#social">
                                <img src={facebookImg} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#social">
                                <img src={twitterImg} alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#social">
                                <img src={googleImg} alt="Google+" />
                            </a>
                        </li>
                        <li>
                            <a href="#social">
                                <img src={pinterestImg} alt="Pinterest" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}