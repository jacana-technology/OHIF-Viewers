import { install } from 'pkg-install';

const installNPMPackage = async (packageName, version) => {
  let installObject = {};

  installObject[packageName] = version;

  await install(installObject, {
    prefer: 'yarn',
  });
};

export default installNPMPackage;
