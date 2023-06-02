import styles from './Menu.module.css';
import type { TextLink, TextLinks } from '../../links';
import { NavButton, ToggleButton } from './MenuButtons';

type Props = {
  links: TextLinks,
  darkMode: boolean,
  toggleDarkMode: (dark: boolean) => void,
};

/* Sticky menu designed for rectangular layout. */
export const Menu = ({ links, darkMode, toggleDarkMode }: Props) => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          {links.map((link: TextLink, i: number) => (
            <li>
              <NavButton text={link.text} link={link.link} />
            </li>  
          ))}
          <li>
            <ToggleButton text={'dark'} isToggled={darkMode} onClick={toggleDarkMode} />
          </li>
        </ul>
      </nav>
    </div>
  );
};