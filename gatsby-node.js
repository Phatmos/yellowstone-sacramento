const path = require("path");
const slugifyCategory = (value = "") =>
  value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query CreateBlogPages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Unable to load recovered blog posts", result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  const categories = new Set();

  posts.forEach(({ frontmatter }) => {
    const { slug, category } = frontmatter;
    createPage({
      path: `/blog/${slug}/`,
      component: path.resolve("src/templates/BlogPost.js"),
      context: { slug, category },
    });

    if (category) categories.add(category);
  });

  categories.forEach((category) => {
    createPage({
      path: `/blog/category/${slugifyCategory(category)}/`,
      component: path.resolve("src/templates/category-page.js"),
      context: { category },
    });
  });
};
