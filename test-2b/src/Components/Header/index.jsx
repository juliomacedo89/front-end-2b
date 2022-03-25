import { Container, Content} from './styles'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/img/Logo.png'
import menuMobile from '../../assets/img/menuMobile.png'

export default function Header(){

    function toFeatures(){
        window.scrollTo({
            top: 880,
            behavior: "smooth"
        })
    }

    function toNewsletter(){
        window.scrollTo({
            top: 1550,
            behavior: "smooth"
        })
    }

    function toFooter(){
        window.scrollTo({
            top: 2045,
            behavior: "smooth"
        })
    }

    return(
        <Container>
            <Content>
               <div className="logo">
                   <img src={logoImg} alt="" />
               </div>

               <div className="menu">
                    <nav>
                       <ul>
                           <li>
                               <a href="#home" onClick={toFeatures} >Features</a>
                           </li>
                           <li>
                               <a href="#home" onClick={toNewsletter} >Support</a>
                           </li>
                           <li>
                               <a href="#home" onClick={toFooter} >Blog</a>
                           </li>
                       </ul>
                    </nav>

                    <Link className="menu-item" href=""to="/mobile">
                        <img src={menuMobile} alt="Menu Mobile" />
                    </Link>
               </div>
            </Content>
        </Container>
    )
}