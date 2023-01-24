/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from "phosphor-react";
import { Container, Title } from "../../styles/styles";
import { ButtonPrimary } from "../../styles/styles";
import { AboutContainer } from "./styles";

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="https://avatars.githubusercontent.com/u/98134774?v=4"
            alt="Imagem de perfil Hallison"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Sou um desenvolvedor Front-End que vive em Maringá - Paraná, sou
              formando em desenvolvimento de software.
            </p>
            <p>
              Meu início na programação e desenvolvimento foi em 2019 com
              aplicações simples com HTML e CSS, após este contato, aprendi
              sobre design e UX/UI. Em 2020 continuei meu aprendizado em React e
              NextJs.
            </p>
            <p>
              Atualmente desenvolvo sites institucionais, sistemas para web,
              APIs usando Codeigniter e PHP. Estou em um constante aprendizado
              no FrontEnd, porém busco também me aprofundar nas integrações e
              desenvolvimento BackEnd.
            </p>
          </div>
          <a href="/pdf/Hallison-Brancalhão-CV.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  );
}
