import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import { App } from '../App';

jest.mock("../Components/NavBar", () => ({
  NavBar: () => {
    return <mock-navbar data-testid="navbar"/>;
  },
}));
jest.mock("../Components/Products", () => ({
  Products: () => {
    return <mock-products data-testid="products"/>;
  },
}));

describe('App component', () => {

  test('to mach snapshot', () => {
    const tree = renderer.create(<App name='bob' message='welcome test user'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('it Renders', () => {
    const message = 'hello world!';
    const name = 'app';
    render(<App name={name} message={message}/>);
  });

  test('Render App with message and name', () => {
    const message = 'hello world!';
    const name = 'app';
    render(<App name={name} message={message}/>);
    expect(screen.getByText('hello world!')).toBeInTheDocument();
    expect(screen.getByText('app')).toBeInTheDocument();
  });

});
