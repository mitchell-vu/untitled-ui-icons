import path from "path";

export const PATHS = {
  ROOT: path.resolve(),
  ICONS: path.join(path.resolve(), "icons"),
  PACKAGES: path.join(path.resolve(), "packages"),
} as const;

export const DEFAULT_PROPS = {
  variant: "Line",
  color: "currentColor",
  size: "24",
} as const;

export const COLOR_PATTERNS = {
  REPLACEABLE: /^(#292D32|#17191C|#000)$/,
  SIZE: /^(width|height)$/,
} as const;

export const SIZE_VALUE = "24";
