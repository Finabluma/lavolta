import gql from 'graphql-tag'

const BebidasCarta = gql`
  query Bebidas($limit: Int,$filter: EntityQueryFilterInput, $sort: [EntityQuerySortInput]) {
  node: nodeQuery(limit:$limit,filter: $filter, sort: $sort) {
    bundle: entities {
      ... on NodeVinosCarta {
        nombre: entityLabel
        do: fieldDenominacionOrigen {
          entity {
            entityLabel
          }
        }
        variedad: fieldVariedad {
          entity {
            entityLabel
          }
        }
        precio: fieldPrecio
      }
    }
  }
}
`

export default BebidasCarta
