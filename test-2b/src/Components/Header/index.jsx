import { Container, Content} from './styles'

import logoImg from '../../assets/img/Logo.png'

export default function Header(){

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
                               <a href="#home">Features</a>
                           </li>
                           <li>
                               <a href="#home">Support</a>
                           </li>
                           <li>
                               <a href="#home">Blog</a>
                           </li>
                       </ul>
                   </nav>
               </div>
            </Content>
        </Container>
    )
}