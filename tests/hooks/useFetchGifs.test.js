import { renderHook, waitFor } from '@testing-library/react';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

describe('Tests on useFetchGifs', () => {
    test('Should return the initial value', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     })
    // const {images, isLoading} = useFetchGifs();
    test('Should return the images array and isLoading set as false', async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            
        );

        const {images, isLoading} = result.current;

        // expect( images.length ).toBe(0);
        expect( isLoading ).toBeFalsy();
     })
    
})