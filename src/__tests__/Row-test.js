import { h, render } from 'preact';
import assertJsx from 'preact-jsx-chai';
chai.use(assertJsx);
import Row from '../Row';
describe('Row', () => {
  const node = document.createElement('div');

  it('Should render a Row', () => {
    expect(<Row>Text</Row>).to.eql(<div class="row">Text</div>)
  });

   it('Should render a Row with classNames', () => {
    expect(<Row className="custom class-name">Text</Row>).to.eql(<div class="row custom class-name">Text</div>)
  });

});
