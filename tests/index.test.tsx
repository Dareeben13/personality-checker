import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { IntroSection } from "../components/IntroSection";
import { fetchQuestions } from "../pages/api/hello";
import axios from "axios";

jest.mock("axios");

describe("Should render the app without crashing", () => {
  it("Renders the Intro Page screen with a title", () => {
    render(<IntroSection onClick={() => {}} />);
    expect(screen.getByText("Personality Checker")).toBeInTheDocument();
  });
});

describe("Should properly fetch questions json", () => {
  it("Should fetch questions json", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: [
        {
          question: "You are taking part in a guided tour of a museum. You:",
          options: [
            {
              text: "Are a bit too far towards the back so don’t really hear what the guide is saying",
              tag: "intro",
            },
            {
              text: "Follow the group without question",
              tag: "intro",
            },
            {
              text: "Make sure that everyone is able to hear properly",
              tag: "extro",
            },
            {
              text: "Are right up the front, adding your own comments in a loud voice",
              tag: "extro",
            },
          ],
        },
      ],
    });
    const { data } = await fetchQuestions();
    expect(data.length).toBeGreaterThan(0);
  });
});
