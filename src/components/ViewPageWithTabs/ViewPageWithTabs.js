import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PermissionForm from "../PermissionForm/PermissionForm";

import UserView from "../UserView/UserView";

const ViewPageWithTabs = ({ userId }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold">User Information</h1>
      <Tabs
        selectedIndex={selectedTabIndex}
        onSelect={(index) => setSelectedTabIndex(index)}
      >
        <TabList>
          <Tab>Info</Tab>
          <Tab>Assets</Tab>
          <Tab>Licences</Tab>
          <Tab>Accessories</Tab>
          <Tab>Consumables</Tab>
          <Tab>Tickets</Tab>
        </TabList>

        <TabPanel>
          <UserView userId={userId} />
        </TabPanel>

        <TabPanel>
          <PermissionForm />
        </TabPanel>
        <TabPanel>
          <PermissionForm />
        </TabPanel>
        <TabPanel>
          <PermissionForm />
        </TabPanel>
        <TabPanel>
          <PermissionForm />
        </TabPanel>
        <TabPanel>
          <PermissionForm />
        </TabPanel>
        <TabPanel>
          <PermissionForm />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ViewPageWithTabs;
