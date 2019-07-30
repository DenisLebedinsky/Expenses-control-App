import React from "react";
import List from "../components/List";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";

import mockData from "../__moks__/mockData";

describe("List", () => {
  afterEach(cleanup);

  it("test for render data", async () => {
    const { container, getByTestId } = render(<List items={mockData} />);

    await waitForElement(() => getByTestId("list_of_items"));

    await waitForElement(() => getByTestId("3"));
    expect(container.firstChild).toMatchSnapshot();
  });




  const setup = () => {

    const utils = render(<List items={mockData} />);
    const input = utils.getByTestId("2").firstChild.firstChild;

    return {
      input,
      ...utils
    };
  };

  afterEach(cleanup);

  it("test input method", () => {
    const { input, handleChange } = setup();

    expect(input.value).toBe("February");
    fireEvent.change(input, { target: { value: "test input_name" } });
		
		expect(handleChange).toHaveBeenCalled();
    expect(input.value).toBe("test input_name");
  });
});
