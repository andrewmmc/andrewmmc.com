exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  if (page.path.includes('/category/')) {
    deletePage(page);
  }
};
