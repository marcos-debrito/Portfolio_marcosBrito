import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

const projectsData = [
    {
        image: project1,
        alt: "Project 1",
        desc: "Nu Kenzie é uma aplicação feita em react.js para gerenciamento de gastos, podendo cadastrar lucros e despesas para ter um melhor gerenciamento de suas contas!",
        github: "https://github.com/marcos-debrito/M3_KenzieAcademy/tree/main/M3_02_NuKenzie",
        vercel: "https://react-entrega-s1-template-nu-kenzie-marcos-brito.vercel.app/",
    },
    {
        image: project2,
        alt: "Project 2",
        desc: "Burguer Kenie é um simulador de fast-food conectada a uma API. Possui um sistema para buscar os produtos e tem opção de adicionar ao carrinho",
        github: "https://github.com/marcos-debrito/M3_KenzieAcademy/tree/main/M3_03_Hamburgueria",
        vercel: "https://m3-react-s3-hamburgueria-marcos-debrito.vercel.app/",
    },
    {
        image: project3,
        alt: "Project 3",
        desc: "Kenzie Hub é uma plataforma que podemos cadastrar usuários e logar na sua conta. Quando estiver logado, pode registrar e atualizar suas tecnologias. Possui proteção de rotas e autenticação de usuários",
        github: "https://github.com/marcos-debrito/M3_KenzieAcademy/tree/main/M3_04_KenzieHub",
        vercel: "https://m3-react-entrega-kenzie-hub-marcosbrito.vercel.app/",
    },
    {
        image: project4,
        alt: "Project 4",
        desc: "API feita em express.js responsável por uma plataforma de streaming. Possui o intuito de gerenciar coleções de filmes disponíveis",
        github: "https://github.com/marcos-debrito/M4_KenzieAcademy-/tree/main/M4_S2_movies-marcosbrito",
        vercel: "",
    },
    {
        image: project5,
        alt: "Project 5",
        desc: "API feita em python (django) que permite ao PetKare ter um maior controle e organização dos dados dos animais e sua gama de clientes.",
        github: "https://github.com/marcos-debrito/M5_KenzieAcademy/tree/main/M5_S3_pet-kare-marcosBrito",
        vercel: "",
    },
    {
        image: project6,
        alt: "Project 6",
        desc: "API feita em python (django) que gerencia cursos e aulas de uma escola na modalidade EAD.",
        github: "https://github.com/marcos-debrito/M5_KenzieAcademy/tree/main/M5_S6_projeto-final-kanvas",
        vercel: "",
    },
];

export default projectsData;
