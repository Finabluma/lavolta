import gql from 'graphql-tag'

const PrensaByAlias = gql`
  query prensaByAlias($path: String!) {
  route(path: $path) {
    ... on EntityCanonicalUrl {
      url: path
      entity {
        ... on NodePrensa {
          title: entityLabel
          created: entityCreated
          mainimage: fieldMedia {
            entity {
              ... on MediaImage {
                field: fieldMediaImage {
                  alt
                  url
                  img: derivative(style: FULLHEAD) {
                    url
                  }
                }
              }
            }
          }
          user: uid {
            entity {
              name
            }
          }
          mainbody: body {
            value
          }
          secondimage: fieldImagenExtra {
            entity {
              ... on ParagraphMediaImagen {
                fieldImagen {
                  entity {
                    ... on MediaImage {
                      field: fieldMediaImage {
                        alt
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          secondtext: fieldBodySecundario {
            entity {
              ... on ParagraphBloqueTexto {
                fieldBody: fieldCajaTexto {
                  value
                }
              }
            }
          }
          video: fieldVideo {
            entity {
              ... on ParagraphMediaVideoRemoto {
                fieldVideo {
                  entity {
                    ... on MediaRemoteVideo {
                      name
                      url: fieldMediaOembedVideo
                    }
                  }
                }
              }
            }
          }
          tags: fieldTags {
            tag: entity {
              name
            }
          }
        }
      }
    }
  }
}
`

export default PrensaByAlias
