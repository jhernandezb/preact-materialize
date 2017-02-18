import { h } from 'preact';
import cx from 'classnames';

const Row = ({ children, className, node: Node = 'div' }) => (
  <Node className={cx('row', className)}>{children}</Node>
);
export default Row;
