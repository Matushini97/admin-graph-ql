import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts(
    $pageSize: Int = 10
    $searchTerm: String
    $sortBy: String = "createdAt"
    $sortDirection: SortDirection = desc
    $endCursorPostId: Int
  ) {
    getPosts(
      pageSize: $pageSize
      searchTerm: $searchTerm
      sortBy: $sortBy
      sortDirection: $sortDirection
      endCursorPostId: $endCursorPostId
    ) {
      items {
        id
        description
        createdAt
        images {
          url
        }
        postOwner {
          id
          userName
          firstName
          lastName
          avatars {
            url
          }
        }
        userBan {
          createdAt
          reason
        }
      }
      pageSize
      pagesCount
      totalCount
    }
  }
`
