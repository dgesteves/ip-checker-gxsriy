import CostumeMarker from "./index";
import { Icon } from "leaflet";

describe("CostumeMarker", () => {
  it("should be defined", () => {
    expect(CostumeMarker).toBeDefined();
  });

  it("should be a instance of Icon", () => {
    expect(CostumeMarker).toBeInstanceOf(Icon);
  });
});
