import React from "react";
// import AssetForm from "../../components/Asset/AssetForm/AssetForm";
// import DropdownForm from "../../components/DropdownForm/DropdownForm";
import FormWithMultipleFields from "../../components/Asset/AssetsForm/AssetsForm";

const AssetFormPage = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-4 text-start ml-5 mt-5">
        Create New Asset
      </h1>
      {/* <AssetForm /> */}
      {/* <DropdownForm /> */}
      <div className="-mt-12 ml-24">
        <FormWithMultipleFields />
      </div>
    </div>
  );
};

export default AssetFormPage;
