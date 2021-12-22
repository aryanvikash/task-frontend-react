import { Menu } from "semantic-ui-react";
import React from "react";

export default function header() {
  return (
    <header>
      <Menu secondary size="massive">
        <Menu.Item name="Todo App" />
      </Menu>
    </header>
  );
}
