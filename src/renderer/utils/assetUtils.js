export default function getAssetPath(assetName) {
  if (process.env.NODE_ENV === 'development') {
    return `/assets/${assetName}`;
  } else {
    return `./resources/assets/${assetName}`;
  }
}
