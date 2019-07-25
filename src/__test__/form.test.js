import React from "react";
import Form from '../components/Form'
import {
  render,
  cleanup,
  waitForElement
} from "@testing-library/react";

describe("Form", () => {
  afterEach(cleanup);

  const { container, getByTestId } = render(<Form />);

  it("test for render data", async () => {
    const form_for_add = await waitForElement(() =>
      getByTestId("form_for_add")
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});