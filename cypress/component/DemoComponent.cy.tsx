import { DemoComponent } from "../../src/DemoComponent";

describe("DemoComponent.cy.tsx", () => {
  it("Button counter", () => {
    cy.mount(<DemoComponent />);
    cy.get("input").should("have.attr", "placeholder", "First name...");
  });
});
