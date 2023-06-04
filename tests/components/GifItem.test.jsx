import { render, screen } from "@testing-library/react"
import {GifItem} from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => {
    const title = 'Tanjiro';
    const url  = 'https://tanjiro.com/'
    test('Must match snapshot', () => {

        const { container } = render(<GifItem title={title} url = {url} />);
        expect(container).toMatchSnapshot();
    });

    test('Should show image with URL and indicated ALT', () => {
        render(<GifItem title={title} url={url}/>)
        // expect( screen.getByRole('img').src).toBe( url );

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect( alt ).toBe(alt);
    }); 

    test("Should show the component title", () => {
        render(<GifItem title={title} url={url}/>);

        expect( screen.getByText( title ) ).toBeTruthy();
    })
})