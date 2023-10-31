import React, { useState } from "react";
import { assetData } from "../../data/AssetData/AssetData";
import Swal from "sweetalert2";
import Header from "../Header";
import List from "../List";
import Edit from "../Edit";
import Add from "../Add";

const Dashboard = () => {
  const [assets, setAssets] = useState(assetData);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [asset] = assets.filter((asset) => asset.id === id);

    setSelectedAsset(asset);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure ?",
      text: "You won't be able to revert this",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.value) {
        const [asset] = assets.filter((asset) => asset.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${asset.make} ${asset.model}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setAssets(assets.filter((asset) => asset.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {/*List*/}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            assets={assets}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/*Add*/}
      {isAdding && (
        <Add assets={assets} setAssets={setAssets} setIsAdding={setIsAdding} />
      )}

      {/*Editing*/}
      {isEditing && (
        <Edit
          assets={assets}
          selectedAsset={selectedAsset}
          setAssets={setAssets}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
