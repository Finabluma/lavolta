import gql from 'graphql-tag'
const NodeById = gql`
query NodeById($path: String!) {
  route: route(path: $path) {
    path
    ... on EntityCanonicalUrl {
      entity {
        ... on NodePage {
          title
          body {
            value
            summary
          }
          path {
            alias
          }
        }
      }
    }
  }
}
`

export default NodeById
