const homeBackgroundModules = import.meta.glob(
  "./assets/home-backgrounds/*.png",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

export const rotatingHomeBackgrounds = Object.entries(homeBackgroundModules)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, assetUrl]) => assetUrl);
