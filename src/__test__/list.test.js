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

  it("test input method", () => {
    const utils = render(<List items={mockData} />);
    const input = utils.getByTestId("2").firstChild.firstChild;

    expect(input.value).toBe("February");
    fireEvent.change(input, { target: { value: "test input_name" } });
    expect(input.value).toBe("test input_name");
  });
/*
  it("call edit function", () => {
		const edit = jest.fn();
		const del = jest.fn();

		const ListR = render(<List items={mockData} edit={edit} del={del}/>);
		const input = ListR.getAllByTestId("input_edit")[0];
		const btnDel = ListR.getAllByTestId("btn_del").shift();

		fireEvent.change(input, { target: { value: "test test test" } });
		fireEvent.click(btnDel);

		expect(edit).toHaveBeenCalled();
		expect(btnDel).toHaveBeenCalled();
	});
	*/
});
