import React, { useState } from "react";

const PermissionForm = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Super Admin", grant: false, deny: false, inherit: false },
    { id: 2, name: "Admin", grant: false, deny: false, inherit: false },
    {
      id: 3,
      name: "Reports (View)",
      grant: false,
      deny: false,
      inherit: false,
    },
  ]);
  const [assetPermissions, setAssetPermissions] = useState([
    { id: 1, name: "View", grant: false, deny: false, inherit: false },
    { id: 2, name: "Edit", grant: false, deny: false, inherit: false },
    { id: 3, name: "Create", grant: false, deny: false, inherit: false },
  ]);

  const [accessoryPermissions, setAccessoryPermissions] = useState([
    { id: 1, name: "View", grant: false, deny: false, inherit: false },
    { id: 2, name: "Edit", grant: false, deny: false, inherit: false },
    { id: 3, name: "Create", grant: false, deny: false, inherit: false },
  ]);

  const [consumablePermissions, setConsumablePermissions] = useState([
    { id: 1, name: "View", grant: false, deny: false, inherit: false },
    { id: 2, name: "Edit", grant: false, deny: false, inherit: false },
    { id: 3, name: "Create", grant: false, deny: false, inherit: false },
  ]);

  const [licensePermissions, setLicensePermissions] = useState([
    { id: 1, name: "View", grant: false, deny: false, inherit: false },
    { id: 2, name: "Edit", grant: false, deny: false, inherit: false },
    { id: 3, name: "Create", grant: false, deny: false, inherit: false },
  ]);

  const handlePermissionChange = (id, field) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [field]: true } : permission
      )
    );
  };

  const handleAssetPermissionChange = (id, field) => {
    setAssetPermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [field]: true } : permission
      )
    );
  };

  const handleAccessoryPermissionChange = (id, field) => {
    setAccessoryPermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [field]: true } : permission
      )
    );
  };

  const handleConsumablePermissionChange = (id, field) => {
    setConsumablePermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [field]: true } : permission
      )
    );
  };

  const handleLicensePermissionChange = (id, field) => {
    setLicensePermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [field]: true } : permission
      )
    );
  };

  return (
    <div className="w-full mx-auto p-4 -mt-6">
      <form className="w-11/12 mx-auto p-4 bg-white rounded shadow-md">
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4 text-center font-bold">Grant</div>
          <div className="w-1/4 text-center font-bold">Deny</div>
          <div className="w-1/4 text-center font-bold">Inherit</div>
        </div>
        {permissions.map((permission) => (
          <div className="flex mb-2" key={permission.id}>
            <div className="w-1/4 text-gray-700">{permission.name}</div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`grant_${permission.id}`}
                checked={permission.grant}
                onChange={() => handlePermissionChange(permission.id, "grant")}
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`deny_${permission.id}`}
                checked={permission.deny}
                onChange={() => handlePermissionChange(permission.id, "deny")}
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`inherit_${permission.id}`}
                checked={permission.inherit}
                onChange={() =>
                  handlePermissionChange(permission.id, "inherit")
                }
              />
            </div>
          </div>
        ))}

        {/* Asset Table */}
        <h2 className="text-lg font-semibold mb-2 mt-8">Asset Permissions</h2>
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4 text-center font-bold">Grant</div>
          <div className="w-1/4 text-center font-bold">Deny</div>
          <div className="w-1/4 text-center font-bold">Inherit</div>
        </div>
        {assetPermissions.map((permission) => (
          <div className="flex mb-2" key={permission.id}>
            <div className="w-1/4 text-gray-700">{permission.name}</div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_grant_${permission.id}`}
                checked={permission.grant}
                onChange={() =>
                  handleAssetPermissionChange(permission.id, "grant")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_deny_${permission.id}`}
                checked={permission.deny}
                onChange={() =>
                  handleAssetPermissionChange(permission.id, "deny")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_inherit_${permission.id}`}
                checked={permission.inherit}
                onChange={() =>
                  handleAssetPermissionChange(permission.id, "inherit")
                }
              />
            </div>
          </div>
        ))}

        {/* Accessories Permissions Table */}
        <h2 className="text-lg font-semibold mb-2 mt-8">
          Accessories Permissions
        </h2>
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4 text-center font-bold">Grant</div>
          <div className="w-1/4 text-center font-bold">Deny</div>
          <div className="w-1/4 text-center font-bold">Inherit</div>
        </div>
        {accessoryPermissions.map((permission) => (
          <div className="flex mb-2" key={permission.id}>
            <div className="w-1/4 text-gray-700">{permission.name}</div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_grant_${permission.id}`}
                checked={permission.grant}
                onChange={() =>
                  handleAccessoryPermissionChange(permission.id, "grant")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_deny_${permission.id}`}
                checked={permission.deny}
                onChange={() =>
                  handleAccessoryPermissionChange(permission.id, "deny")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_inherit_${permission.id}`}
                checked={permission.inherit}
                onChange={() =>
                  handleAccessoryPermissionChange(permission.id, "inherit")
                }
              />
            </div>
          </div>
        ))}

        {/* Consumables Permissions Table */}
        <h2 className="text-lg font-semibold mb-2 mt-8">
          Consumables Permissions
        </h2>
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4 text-center font-bold">Grant</div>
          <div className="w-1/4 text-center font-bold">Deny</div>
          <div className="w-1/4 text-center font-bold">Inherit</div>
        </div>
        {consumablePermissions.map((permission) => (
          <div className="flex mb-2" key={permission.id}>
            <div className="w-1/4 text-gray-700">{permission.name}</div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_grant_${permission.id}`}
                checked={permission.grant}
                onChange={() =>
                  handleConsumablePermissionChange(permission.id, "grant")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_deny_${permission.id}`}
                checked={permission.deny}
                onChange={() =>
                  handleConsumablePermissionChange(permission.id, "deny")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_inherit_${permission.id}`}
                checked={permission.inherit}
                onChange={() =>
                  handleConsumablePermissionChange(permission.id, "inherit")
                }
              />
            </div>
          </div>
        ))}

        {/* License Permissions Table */}
        <h2 className="text-lg font-semibold mb-2 mt-8">License Permissions</h2>
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4 text-center font-bold">Grant</div>
          <div className="w-1/4 text-center font-bold">Deny</div>
          <div className="w-1/4 text-center font-bold">Inherit</div>
        </div>
        {licensePermissions.map((permission) => (
          <div className="flex mb-2" key={permission.id}>
            <div className="w-1/4 text-gray-700">{permission.name}</div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_grant_${permission.id}`}
                checked={permission.grant}
                onChange={() =>
                  handleLicensePermissionChange(permission.id, "grant")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_deny_${permission.id}`}
                checked={permission.deny}
                onChange={() =>
                  handleLicensePermissionChange(permission.id, "deny")
                }
              />
            </div>
            <div className="w-1/4 text-center">
              <input
                type="radio"
                name={`asset_inherit_${permission.id}`}
                checked={permission.inherit}
                onChange={() =>
                  handleLicensePermissionChange(permission.id, "inherit")
                }
              />
            </div>
          </div>
        ))}
        <div className="mb-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PermissionForm;
