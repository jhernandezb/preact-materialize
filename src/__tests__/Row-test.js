/* eslint-disable react/no-unknown-property */
import { h } from 'preact';
import assertJsx from 'preact-jsx-chai';
import Row from '../Row';

chai.use(assertJsx);
describe('Row', () => {
  it('Should render a Row', () => {
    expect(<Row>Text</Row>).to.eql(<div class="row">Text</div>);
  });

  it('Should render a Row with classNames', () => {
    expect(<Row className="custom class-name">Text</Row>)
      .to.eql(<div class="row custom class-name">Text</div>);
  });
});
