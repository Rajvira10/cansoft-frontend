export default async function graphqlRequest(query) {
  const url = process.env.WORDPRESS_API_URL || "http://rajvirtest-com.us.webmyway.ca/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  return json;
}
