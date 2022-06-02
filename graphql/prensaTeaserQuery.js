import gql from 'graphql-tag'

const PrensaTeasers = gql`
  query allPosts($limit: Int, $offset: Int, $filter: EntityQueryFilterInput) {
  nodeQuery(
    limit: $limit
    offset: $offset
    filter: $filter
    sort: [{ field: "created", direction: DESC }]
  ) {
    entities {
      nid: entityUuid
      title: entityLabel
      created: entityCreated
      url: entityUrl {
        path
      }
      ... on NodePrensa {
        user: uid {
          entity {
            name
          }
        }
        body {
          summary
        }
        media: fieldMedia {
          entity {
            ... on MediaImage {
              name
              field: fieldMediaImage {
                alt
                # url
                # width
                # height
                alt
                img:derivative(style:MAINTEASER1610){
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default PrensaTeasers
