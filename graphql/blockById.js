import gql from 'graphql-tag'

const BlockByID = gql`
 query blockByID($id:String!) {
 blockContentById(id:$id){
    title:entityLabel
	}
}
`

export default BlockByID
