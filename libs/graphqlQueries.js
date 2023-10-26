import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `{
                posts {
                    nodes {
                    title
                    content
                    }
                }
            }`,
  };

  const res = graphqlRequest(query);
  const allPosts = res;

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

  const res = graphqlRequest(query);
  const menuItems = res;

  return menuItems;
}

export async function getHero() {
  const query = {
    query: `{
                page(id: "cG9zdDoxNA==") {
                    title
                    content
                
                }
            }`,
  };

  const res = graphqlRequest(query);
  const hero = res;

  return hero;
}
