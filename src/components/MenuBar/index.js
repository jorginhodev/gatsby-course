import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkmode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para a Home">
          <S.MenubarItem>
            <Home />
          </S.MenubarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" title="Pesquisar">
          <S.MenubarItem>
            <Search />
          </S.MenubarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenubarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkmode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenubarItem>
        <S.MenubarItem title="Mudar visualização">
          <Grid />
        </S.MenubarItem>
        <S.MenubarItem title="Ir para o topo">
          <Arrow />
        </S.MenubarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
