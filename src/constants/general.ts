import {faDrum} from "@fortawesome/free-solid-svg-icons";

const locales = [
  { id: 1, title: 'en', icon: 'gb', },
  { id: 2, title: 'es', icon: 'es', },
  { id: 3, title: 'de', icon: 'de', },
  { id: 4, title: 'fr', icon: 'fr', },
];

const selectMiniSetup = [
  {title: 'Drums && cymbals', link: "/", icon: faDrum, id: 1},
  {title: 'First time drum buyers', link: "/", icon: faDrum, id: 2},
  {title: 'Drum accessories', link: "/", icon: faDrum, id: 3},
  {title: 'Drum hardware', link: "/", icon: faDrum , id: 4},
  {title: 'Recording gear', link: "/", icon: faDrum, id: 5},
  {title: 'Streaming setup', link: "/", icon: faDrum, id: 6},
  {title: 'Lightning', link: "/", icon: faDrum, id: 7},
  {title: 'Random fun stuff', link: "/", icon: faDrum,  id: 8},

]
export {locales, selectMiniSetup};
