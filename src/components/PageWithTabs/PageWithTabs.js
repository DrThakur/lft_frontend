import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import InformationForm from "../InformationForm/InformationForm";
import PermissionForm from "../PermissionForm/PermissionForm";

const PageWithTabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div>
      <h1 className="text-lg font-semibold">Create User</h1>
      <Tabs
        selectedIndex={selectedTabIndex}
        onSelect={(index) => setSelectedTabIndex(index)}
      >
        <TabList>
          <Tab>Information</Tab>
          <Tab>Permissions</Tab>
        </TabList>

        <TabPanel className="w-96 -ml-12">
          <InformationForm />
        </TabPanel>

        <TabPanel className="w-full">
          <PermissionForm />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PageWithTabs;
