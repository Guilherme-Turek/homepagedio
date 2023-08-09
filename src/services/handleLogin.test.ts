import { handleLogin } from "./handleLogin";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should display a welcome alert", () => {
    handleLogin();
    expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo");
  });
});
