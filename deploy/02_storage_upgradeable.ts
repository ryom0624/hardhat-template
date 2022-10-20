module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("StorageUpgradeable", {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      execute: {
        init: {
          methodName: "initialize",
          args: [],
        },
        onUpgrade: {
          methodName: "",
          args: [],
        },
      },
    },
  });
};
module.exports.tags = ["StorageUpgradeable"];
