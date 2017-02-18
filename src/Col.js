import { h } from 'preact';
import cx from 'classnames';
import constants from './constants';

const Col = ({
  children,
  className,
  node: Node = 'div',
  s,
  m,
  l,
  offset,
  pull,
  push,
  ...props }) => {
  const classes = {
    col: true,
  };
  const sizes = { s, m, l };
  constants.SIZES.forEach((size) => {
    classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach((off) => {
      classes[`offset-${off}`] = true;
    });
  }

  if (pull) {
    pull.split(' ').forEach((p) => {
      classes[`pull-${p}`] = true;
    });
  }

  if (push) {
    push.split(' ').forEach((p) => {
      classes[`push-${p}`] = true;
    });
  }

  return (<Node {...props} className={cx(classes, className)} >{children}</Node>);
};
export default Col;
