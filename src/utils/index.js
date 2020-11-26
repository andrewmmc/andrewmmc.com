/* eslint-disable import/prefer-default-export */
export const ellipsis = (string, charLimit = 100) =>
  `${string.substring(0, charLimit)}...`;
