import { AppLinks } from "@/types/app-links";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { SiMalt } from "react-icons/si";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Acceuil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Baban",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Informations",
    baseUrl: "https://www.linkedin.com/in/estebanlopezdev/",
    type: "external",
  },
];

const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mot-de-passe-perdu",
    type: "internal",
  },
];

const footerInformationsLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "À propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Github",
    baseUrl: "https://github.com/Babanlpz",
    type: "external",
    icon: RiGithubFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/in/estebanlopezdev/",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Malt",
    baseUrl: "https://www.malt.fr/profile/estebanlopez6",
    type: "external",
    icon: SiMalt,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationsLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];
