import { FlexiConfig, ItemType } from "./types/index";

export const recursiveFlexiConfig: FlexiConfig = {
  items: [
    {
      name: "name",
      label: "Person's Name",
      type: ItemType.TextField
    },
    {
      name: "state",
      label: "Person's State",
      type: ItemType.DropDown,
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};
