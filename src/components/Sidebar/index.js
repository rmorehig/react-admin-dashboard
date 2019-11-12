import React, { useState } from "react";
import Logo from "./Logo";
import { SidebarItem } from "./SidebarItem";
import { Separator } from "./styles";

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div>
      <Logo />
      <SidebarItem
        title="Home"
        active={selectedItem === "Home"}
        handleClick={() => setSelectedItem("Home")}
      />
      <Separator />
      <SidebarItem
        title="Contacts"
        active={selectedItem === "Contacts"}
        handleClick={() => setSelectedItem("Contacts")}
      />
      <Separator />
      <SidebarItem
        title="Ideas"
        active={selectedItem === "Ideas"}
        handleClick={() => setSelectedItem("Ideas")}
      />
      <Separator />
      <SidebarItem
        title="Settings"
        active={selectedItem === "Settings"}
        handleClick={() => setSelectedItem("Settings")}
      />
    </div>
  );
};
