import React from "react";
import List from '../components/List'
import {
  render,
  cleanup,
  waitForElement
} from "@testing-library/react";

import mockData from "../__moks__/mockData";

describe("List", () => {
  afterEach(cleanup);

    const { container, getByTestId } = render(<List items={mockData} />);
  

  it("test for render data", async () => {
    const listOfItems = await waitForElement(() =>
      getByTestId("list_of_items")
    );

    const li = await waitForElement(() =>
      getByTestId("3")
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});