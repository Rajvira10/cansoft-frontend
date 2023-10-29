import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `{
                posts {
                    nodes {
                    id
                    title
                    content
                    }
                }
            }`,
  };

  const res = await graphqlRequest(query);
  const allPosts = await res.data.posts.nodes;

  return allPosts;
}

export async function getMenuItems() {
  const query = {
    query: `{
            menuItems {
                    nodes {
                    id
                    label
                    url
                    parentId
                    order
                    childItems {
                        nodes {
                            id
                            label
                            url
                            parentId
                            order
                        }
                    }
                }
            }
        }`,
  };

  const res = await graphqlRequest(query);
  const menuItems = await res.data.menuItems.nodes;

  return menuItems;
}

export async function getHero() {
  const query = {
    query: `{
                page(id: "cG9zdDoyNQ==") {
                    title
                    content           
                }
            }`,
  };

  const res = await graphqlRequest(query);
  const hero = await res.data.page;

  return hero;
}
