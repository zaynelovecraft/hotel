import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// const graphcmsToken = process.env.GRAPHCMS_TOKEN;

const graphcmsToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDkzMTkwNjUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsMW9lZHNkNzJzYXowMXhrNGdwY2FqZ2ovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDQwMjljZmMtNDZjZi00MzFhLWJiYzItMTBlYTM0ODhkMTA4IiwianRpIjoiY2wxb3B6amt2MzNiZDAxeGtjOWE3YTRpciJ9.W8f1UqNnwU_mOv1rixhDlgNkHUDDs3nTZ8-pBoun3NkPZJRCeQDjCMi8gMzeVSWrgHaxEwmRNnVDHeg4KogaQlf1tf2q6KzCONezmHW9DxU6sLwMvNPBUCrk4pHukJDzhB2tOHYKyLemO9D3aCh0AeFJFc4O9HjZq3NeJD4cBO3tXck2lBueaXAVt7CQqLI7-XMbZICTp8JRro3c-KhO1DSxQe3xWH1U-J5hdi6b6En-aOLEfFKWAmbhaN3lTLo-7bRozG0Eja-1viimXeEm7-Z91WIfMxU9Izu8eoaHKTrPnSy4nkMRlaZhVNLW4AbXrvtoHcxUI3Tz_nDInOI19ywQuH-XEhry2safw6VeyP6pRA7cq7gY0Egps5I-NCW6oaKK8WP14vE4hHF9jNmF1D3UaMXzpM2CkqU2mWLHt9oUqnQ9f0gueX33fbkSpdIH1zN4x6g7el_Q985TNR3U70Hl-3hy-HXy8atXuBNB56d827CgxqmEALAQb7tZnA6N-3Vh2wHW-wKNkfhjNlUadBkaKToGJXKHw5cYPPU227Ekb6pfntKcSkUCjlmCtgRzbqFgABzOumH73AbjBNva5Zu4ZpHFoWPksmZ0qscJmoOHztSnG_HcdGorvS1Oil6NkUuGMrC5YnxM1bIdslQYNrePgH9dKEp577ZouN3Be3w'

export default async function comments(req, res) {
  console.log({graphcmsToken})
  const { name, email, slug, comment } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  try {
    const result = await graphQLClient.request(query, req.body);
  
    return res.status(200).send(result);
    
    
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }}
