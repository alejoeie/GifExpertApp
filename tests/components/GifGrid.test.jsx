import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
describe('Tests on GifGrid', () => { 
    const category = 'Dragon Ball'
    // test('Should show the loading state', () => {
        

    //     render(<GifGrid  category={category}/>)
    //     // screen.debug();
    //     expect(screen.getByText('Cargando...'));
    //     // expect(screen.getByText(category));
    // });

    test('Should show items when useFetchGifs custom Hook loads', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
             
             
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid  category = {category}/>);
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
 })