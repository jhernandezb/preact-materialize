/* eslint-disable react/no-unknown-property */
import { h } from 'preact';
import assertJsx from 'preact-jsx-chai';
import Col from '../Col';

chai.use(assertJsx);
describe('Col', () => {
  it('Should render a Col', () => {
    expect(<Col>Text</Col>).to.eql(<div class="col">Text</div>);
  });

  it('Should render a Col with classNames', () => {
    expect(<Col className="custom class-name">Text</Col>)
      .to.eql(<div class="col custom class-name">Text</div>);
  });

  it('Should render a Col with s{x}', () => {
    expect(<Col s={6}>Text</Col>)
      .to.eql(<div class="col s6">Text</div>);
  });

  it('Should render a Col with m{x}', () => {
    expect(<Col m={7}>Text</Col>)
      .to.eql(<div class="col m7">Text</div>);
  });

  it('Should render a Col with offset-{x}', () => {
    expect(<Col offset="s7">Text</Col>)
      .to.eql(<div class="col offset-s7">Text</div>);
  });

  it('Should render a Col with multiple offset-{x}', () => {
    expect(<Col offset="s7 m4">Text</Col>)
      .to.eql(<div class="col offset-s7 offset-m4">Text</div>);
  });

  it('Should render a Col with pull-{x}', () => {
    expect(<Col pull="s7">Text</Col>)
      .to.eql(<div class="col pull-s7">Text</div>);
  });

  it('Should render a Col with multiple pull-{x}', () => {
    expect(<Col pull="s7 m4">Text</Col>)
      .to.eql(<div class="col pull-s7 pull-m4">Text</div>);
  });

  it('Should render a Col with push-{x}', () => {
    expect(<Col push="s7">Text</Col>)
      .to.eql(<div class="col push-s7">Text</div>);
  });

  it('Should render a Col with multiple push-{x}', () => {
    expect(<Col push="s7 m4">Text</Col>)
      .to.eql(<div class="col push-s7 push-m4">Text</div>);
  });
});
