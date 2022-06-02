import gql from 'graphql-tag'

const ParagraphsConditions = gql`
 query paragraphsCondiciones($filter: EntityQueryFilterInput) {
  paragraphQuery(filter: $filter) {
    entities {
      ... on ParagraphCondiciones{
        text: fieldNuevaCondicion
      }
    }
  }
}
`

export default ParagraphsConditions
