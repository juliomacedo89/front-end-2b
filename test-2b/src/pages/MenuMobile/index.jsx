import { Container, Content } from './styles'
import { Link } from 'react-router-dom'

import closeImg from '../../assets/img/close.png'

export default function MenuMobile(){

    return(
        <Container>
            <Content>
                <div className="closeMenu">
                    <Link className="menu-item" href=""to="/">
                        <img src={closeImg} alt="Fechar" />
                    </Link>
                </div>
                
                <div className="menuInteraction">
                    <nav>
                        <ul>
                            <li>
                                <Link className="menu-item" href=""to="/">
                                    <a href="#home">Features</a>
                                </Link> 
                            </li>
                            <li>
                                <Link className="menu-item" href=""to="/">
                                    <a href="#home">Support</a>
                                </Link> 
                            </li>
                            <li>
                                <Link className="menu-item" href=""to="/">
                                    <a href="#home">Blog</a>
                                </Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </Content>
        </Container>
    )
}