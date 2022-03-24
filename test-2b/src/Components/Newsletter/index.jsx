import { Container, Content } from './styles'

import SocialBar from '../../Components/SocialBar'

export default function Newsletter(){

    return(
        <Container>
            <Content>
                <h2>Keep in touch with us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>

                <div className="input-group">
                    <label htmlFor="">
                        <input type="email" name="email" id="email" placeholder="Enter your email to update" />
                    </label>
                    <button type="submit">
                        submit
                    </button>
                </div>
                <SocialBar />
            </Content>
        </Container>
    )
}