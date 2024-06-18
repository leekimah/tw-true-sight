import { FunctionComponent } from 'react';
import { styles } from '../utils/styles';
import { SpinnerProps } from '../utils/props';

export const Spinner: FunctionComponent<SpinnerProps> = ({
  borderSize = 4,
  color = 'blue',
  size = 'small',
  className,
}) => {
  return <div className={styles.spinner(className, size, color, borderSize)} />;
};
