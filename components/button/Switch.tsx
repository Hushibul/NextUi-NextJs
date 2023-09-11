import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../../assets/icons/MoonIcon';
import { SunIcon } from '../../assets/icons/SunIcon';

export default function ThemeSwitch({ toggleTheme, theme }: any) {
  return (
    <Switch
      onClick={toggleTheme}
      size='md'
      color='primary'
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
