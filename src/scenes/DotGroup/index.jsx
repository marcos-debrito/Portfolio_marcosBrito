import AnchorLink from "react-anchor-link-smooth-scroll";
import { DotContainer } from "./style";

const DoutGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <DotContainer>
      <AnchorLink
        className={`animation ${
          selectedPage === "início" ? "início" : "nonSelected"
        }`}
        href="#início"
        onClick={() => {
          setSelectedPage("início");
        }}
      />
      <AnchorLink
        className={`animation ${
          selectedPage === "habilidades" ? "habilidades" : "nonSelected"
        }`}
        href="#habilidades"
        onClick={() => {
          setSelectedPage("habilidades");
        }}
      />
      <AnchorLink
        className={`animation ${
          selectedPage === "projetos" ? "projetos" : "nonSelected"
        }`}
        href="#projetos"
        onClick={() => {
          setSelectedPage("projetos");
        }}
      />
      <AnchorLink
        className={`animation ${
          selectedPage === "certificados" ? "certificados" : "nonSelected"
        }`}
        href="#certificados"
        onClick={() => {
          setSelectedPage("certificados");
        }}
      />
    </DotContainer>
  );
};

export default DoutGroup;
