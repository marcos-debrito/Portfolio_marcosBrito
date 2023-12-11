import RenderTechs from "./RenderTechs";

import { ContainerTechs, ContainerRight } from "./style";

const Techs = () => {
  return (
    <ContainerRight>
      <p>Marcação e Estilização</p>
      <ContainerTechs>
        <RenderTechs
          name={"HTML"}
          delay={0.2}
          link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        />
        <RenderTechs
          name={"CSS"}
          delay={0.4}
          link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        />
        <RenderTechs
          name={"SC"}
          delay={0.6}
          link="https://styled-components.com/"
        />
      </ContainerTechs>
      <p>Programação e Frameworks</p>
      <ContainerTechs>
        <RenderTechs
          name={"JS"}
          delay={0.6}
          size="2.5rem"
          link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        />
        <RenderTechs
          name={"TS"}
          delay={0.8}
          size="2.5rem"
          link="https://www.typescriptlang.org/"
        />
        <RenderTechs
          name={"REACT"}
          delay={1}
          size="2.5rem"
          link="https://react.dev/"
        />
        <RenderTechs
          name={"PYTHON"}
          delay={1.2}
          size="2.5rem"
          link="https://www.python.org/"
        />
        <RenderTechs
          name={"C#"}
          delay={1.4}
          link="https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/"
        />
        <RenderTechs name={"VITE"} delay={1.6} link="https://vitejs.dev/" />
        <RenderTechs name={"NEXT"} delay={1.8} link="https://nextjs.org/" />
        <RenderTechs name={"UNITY"} delay={2} link="https://unity.com/pt" />
        <RenderTechs
          name={"NODE"}
          delay={2.2}
          link="https://developer.mozilla.org/pt-BR/docs/Web/API/Node"
        />
        <RenderTechs
          name={"EXPRESS"}
          delay={2.4}
          link="https://expressjs.com/pt-br/"
        />
        <RenderTechs
          name={"POSTGRE"}
          delay={2.6}
          link="https://www.postgresql.org/"
        />
        <RenderTechs
          name={"DJANGO"}
          delay={2.8}
          link="https://www.djangoproject.com/start/"
        />
      </ContainerTechs>
    </ContainerRight>
  );
};

export default Techs;
