import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests on <AddCategory />', () => { 

    test('Should change the input text value', () => {
        render(<AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama'} } );
        expect(input.value).toBe('Saitama');
        // screen.debug();
    } );

    test('Must call onNewCategory if input has a value', () => {

        const inputValue = 'Tanjiro';

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form ); // Already knows who is the form in the component.
        // screen.debug();
        expect ( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('Should not call the onNewCategory if input is empty', () => {
        // const inputValue = screen.getByRole('textbox');
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form')
        fireEvent.submit(form);

        // expect(inputValue).toBe(''); 
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })

 })