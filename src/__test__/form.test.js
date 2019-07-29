import React from "react";
import Form from '../components/Form'
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from "@testing-library/react";

describe("Form", () => {
  afterEach(cleanup);


  it("test for render data", async () => {

    const { container, getByTestId } = render(<Form />);

    await waitForElement(() =>
      getByTestId("form_for_add")
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  const setup = () => {
    const utils = render(<Form />)
    const input = utils.getByTestId('input_name')
    const input2 = utils.getByTestId('input_expenses')
    const input3 = utils.getByTestId('input_incomes')

    return {
      input,
      input2,
      input3,
      ...utils,
    }
  }

  afterEach(cleanup)

  test('test input method', () => {

    const { input, input2, input3 } = setup()

    fireEvent.change(input, { target: { value: 'test input_name' } })
    expect(input.value).toBe('test input_name')

    fireEvent.change(input2, { target: { value: '123' } })
    expect(input2.value).toBe('123')

    fireEvent.change(input3, { target: { value: '777' } })
    expect(input3.value).toBe('777')

  })
});