import { useState, MouseEvent, } from 'react'; 

type NavProps = {
  text: string,
  link: string,
};

type ToggleProps = {
  text: string,
  isToggled: boolean,
  onClick: (toggled: boolean) => void,
}

export const NavButton = ({ text, link, }: NavProps) => {
  return (
    <a href={link}>
      <h1>{text}</h1>
    </a>
  );
};

export const ToggleButton = ({ text, isToggled, onClick, }: ToggleProps) => {
  const [toggled, setToggled] = useState<boolean>(isToggled);

  const handleClick = (_e: MouseEvent<HTMLElement>) => {
    onClick(!toggled);
    setToggled(toggled => !toggled);
  }

  return (
    <h1>{text}</h1>
  );
};