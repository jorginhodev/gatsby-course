import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <S.MainContent>
      <h1>Sobre mim</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
        eligendi, natus corporis ipsa, delectus rem in tenetur quis repellendus
        iusto eum ea ex minus illo quaerat dolorem? Nemo, architecto incidunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
        eligendi, natus corporis ipsa, delectus rem in tenetur quis repellendus
        iusto eum ea ex minus illo quaerat dolorem? Nemo, architecto incidunt.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
        eligendi, natus corporis ipsa, delectus rem in tenetur quis repellendus
        iusto eum ea ex minus illo quaerat dolorem? Nemo, architecto incidunt.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Stylus, Sass, Less, PostCSS)</li>
        <li>Css Frameworks (Bootstrap, Foundation, Bulma)</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux / Flux</li>
        <li>NodeJS</li>
        <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
        <li>Git</li>
        <li>Python</li>
        <li>Ruby / Rails</li>
        <li>MySQL - MongoDB</li>
        <li>Scrum and Kanban</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>
    </S.MainContent>
  </Layout>
)

export default AboutPage
