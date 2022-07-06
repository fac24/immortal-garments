import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Recycle from "../pages/clothes-condition/recycle";
import { getMiles, getKm } from "../components/SearchResults";

//*********** Test mocks, helpers & resets **************//

// This will reset the page after each test so they dont interfere
afterEach(() => {
  cleanup();
});

// immitating the API call by creating a fake fetch w/ response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: [
          {
            id: 93171,
            distance: 0.42,
            name: "Voley Road",
            address: "junct with Salisbury Road, London, N19 5HE",
          },
        ],
      }),
  })
);

// Need to 'mock' the router plugin for when the breadcrumb component renders in the components otherwise render(<ComponentName />) fails!
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/test/test/test",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

//*********** Basic test to check set up --> PASSING **************//
test("should render a prompt to the user", () => {
  render(<Recycle />);
  expect(
    screen.getByText("Find your nearest textile recycling point.")
  ).toBeInTheDocument();
});

//*********** Testing the unit conversion functions  --> PASSING **************//

test("getMiles function returns correct integer", () => {
  expect(getMiles(1234567)).toBe("767.12");
});

test("getKm functions return correct integer", () => {
  expect(getKm(12345.67)).toBe("12.35");
});

//*********** Testing ??? **************//

//*********** Tests still in progress **************//
// test("submit button should NOT change DOM if nothing typed", () => {
//   render(<Recycle />);
//   const input = screen.getByRole("searchbox");
//   const submitButon = screen.getByRole("button", { name: /submit/i });
//   //fireEvent.click(submitButon);
// });

// test("submit button should change DOM result/error", () => {
//   render(<Recycle />);
//   const input = screen.getByRole("searchbox");
//   //simulate input
//   const submitButon = screen.getByRole("button", { name: /submit/i });
//   //check stuff is on page
// });

// Fetch tests
// test('render name, distance and address after a fetch is made', async () => {
//   await act(async () => render(<Recycle />));
//   RUN MOCK API??
//   expect(screen.getByText("Voley Road")).toBeInTheDocument();
// })

//*********** Jest snapshots **************//
/*
// This is cool command that shows what is accessable from the page in a json
test('get component tree', () => {
  const tree = renderer.create(<Recycle />).toJSON();
  console.log(tree)
})

// toMatchSnapshot will make a blueprint of the file tree and compare it to current file. Seems handy for after final deploy to check any typos in the DOM
test('get component tree', () => {
  const tree = renderer.create(<Recycle />).toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();
})
*/

//*********** Final Resets **************//

// If using the global.fetch have this at end to clear.
global.fetch.mockClear();
delete global.fetch;

// NOTES: it/test are interchangable in Jest - personal prefrerance
