import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
<FooterSection id="Footer">
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Us")}</Language>
              <Para>
                {t(`Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa
magna derita valies darta donna mare fermentum iaculis eu non diam
phasellus..`)}
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Useful Links")}</Title>
              <Large to="/">{t("Home")}</Large>
              <Large to="/">{t("About Us")}</Large>
              <Large to="/">{t("Services")}</Large>
              <Large to="/">{t("Terms of service")}</Large>
              <Large to="/">{t("Privacy policy")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>A108 Adam Street</Para>
              <Para>New York NY 535022</Para>
              <Para>United States</Para>
              <Para>Phone: +1 5589 55488 55</Para>
              <Para>Email: info@example.com</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Our Services")}</Title>
              <Large to="/">{t("Web Design")}</Large>
              <Large to="/">{t("Web Development")}</Large>
              <Large to="/">{t("Product Management")}</Large>
              <Large to="/">{t("Marketing")}</Large>
              <Large to="/">{t("Graphic Design")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="nigeria-icon.png"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>

              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <h1>Gidan.NG</h1>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="#"
                src="x-icon.avif"
              />
              <SocialLink
                href="#"
                src="facebook-icon.png"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="instagram-icon.png"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="linkedin.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
