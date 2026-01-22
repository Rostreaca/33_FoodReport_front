import {
    FooterContainer, FooterWrapper, LogoWrapper, LogoLink,
    NavLink, NavWrapper, CopyrightWrapper, CopyrightText
} from "./Footer.style";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>

                <LogoWrapper>
                    <LogoLink to="/">Food Report</LogoLink>
                </LogoWrapper>

                <NavWrapper>
                    <NavLink to="/recommendations">추천 맛집</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/privacy">Privacy</NavLink>
                </NavWrapper>

                <CopyrightWrapper>
                    <CopyrightText>
                        © 2026 Food Report All rights reserved.
                    </CopyrightText>
                </CopyrightWrapper>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
