import gql from 'graphql-tag'

const PlatosCarta = gql`
query platos($limit: Int, $filter: EntityQueryFilterInput, $sort: [EntityQuerySortInput]) {
  node: nodeQuery(limit:$limit,filter: $filter, sort: $sort) {
    bundle: entities {
      ... on NodePlatosCarta {
        nid
        nombre: title
        precio: fieldPrecio
        tipo: fieldTipoPlato
      }
    }
  }
}
`

export default PlatosCarta
