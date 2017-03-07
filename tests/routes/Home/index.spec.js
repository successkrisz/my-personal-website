import HomeRoute from 'routes/Home';

describe('(Route) Home', () => {
  let _component;

  beforeEach(() => {
    _component = HomeRoute({}).component();
  });

  it('Should return a route configuration function', () => {
    expect(typeof HomeRoute).to.equal('function');
  });

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div');
  });
});
