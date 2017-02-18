import { h } from 'preact';
import cx from 'classnames';

const Col = ({ children, className, node: Node = 'div' }) => (
  <Node className={cx('Col', className)}>{children}</Node>
);
export default Col;
