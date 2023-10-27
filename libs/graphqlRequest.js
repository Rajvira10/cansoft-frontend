export default async function graphqlRequest(query) {
  const url = process.env.WORDPRESS_API_URL || "https://rajvir.casoft.ca/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  return json;
}
