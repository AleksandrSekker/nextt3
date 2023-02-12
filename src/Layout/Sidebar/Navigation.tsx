import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {faDrum, faHome, faContactCard} from "@fortawesome/free-solid-svg-icons";
import styles from './sass/sidebar.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const menuItemData = [
  {icon: faHome, text: 'Home', key: 0},
  {icon: faDrum, text: `Mini's setup`, key: 1},
  {icon: faDrum, text: 'Patreon', key: 2},
  {icon: faDrum, text: 'Merch', key: 3},
  {icon: faDrum, text: 'Redpoint', key: 4},
  {icon: faContactCard, text: 'Contact', key: 5},
]
export const Navigation = () => (
  <motion.ul className={styles.ul} variants={variants}>
    {menuItemData.map(({icon, text, key}) => (
      <MenuItem icon={icon} text={text} key={key} />
    ))}
  </motion.ul>
);

