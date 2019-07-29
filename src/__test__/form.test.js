import React from "react";
import Form from '../components/Form'
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";

describe("Form", () => {
  afterEach(cleanup);


  it("test for render data", async () => {

    const { container, getByTestId } = render(<Form />);

    const iputName = await waitForElement(() =>
      getByTestId("form_for_add")
    );

    //console.log(iputName)
    expect(container.firstChild).toMatchSnapshot();
  });

  afterEach(cleanup);

  test('loads items eventually', async () => {
    const { findByText, getByTestId } = render(<Form />)

    fireEvent.change(getByTestId('input_name'), { target: { value: 'a' } })

    expect(findByText('a')).toBeTruthy()
  })
});