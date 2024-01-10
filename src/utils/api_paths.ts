/* 어드민 */
export const CREATE_CHANNEL_BY_ADMIN_PATH = '/channels/create'

/* 인증 */
export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const LOGOUT_PATH = '/logout'
export const AUTH_CHECK = '/auth-user'
/* 사용자 */
export const GET_ALL_USER_LIST_PATH = '/users/get-users'
export const GET_ONLINE_USER_LIST_PATH = '/users/online-users'
export const GET_USER_PROFILE_PATH = '/users'
export const UPDATE_PROFILE_IMAGE_PATH = '/users/upload-photo'
export const UPDATE_COVER_IMAGE_PATH = '/users/upload-photo'

/* 설정 */
export const UPDATE_MY_PROFILE_PATH = '/settings/update-user'
export const UPDATE_MY_PASSWORD_PATH = '/settings/update-password'

/* 채널 */
export const GET_CHANNEL_LIST_PATH = '/channels'
export const GET_CHANNEL_DETAIL_PATH = '/channel'

/* 포스트 */
export const GET_POST_LIST_BY_CHANNEL_PATH = '/posts/channel'
export const GET_POST_LIST_BY_USER_PATH = '/posts/author'
export const CREATE_POST_PATH = '/posts/create'
export const GET_DETAIL_POST_PATH = '/posts'
export const UPDATE_POST_PATH = '/posts/update'
export const DELETE_POST_PATH = '/posts/delete'

/* 좋아요 */
export const LIKE_POST_PATH = '/likes/create'
export const UNLIKE_POST_PATH = '/likes/delete'

/* 댓글 */
export const CREATE_COMMENT_PATH = '/comments/create'
export const DELETE_COMMENT_PATH = '/comments/delete'

/* 알림 */
export const GET_NOTIFICATIONS_PATH = '/notifications'
export const UPDATE_NOTIFICATIONS_PATH = '/notifications/seen'
export const CREATE_NOTIFICATIONS_PATH = '/notifications/create'

/* 팔로우 */
export const FOLLOW_PATH = '/follow/create'
export const UNFOLLOW_PATH = '/follow/delete'

/* 메시지 */
export const GET_USER_MESSAGE_PATH = '/messages/conversations'
export const GET_MESSAGE_LIST_BY_USER_PATH = '/messages'
export const CREATE_MESSAGE_PATH = '/messages/create'
export const UPDATE_MESSAGE_PATH = '/messages/update-seen'

/* 검색 */
export const SEARCH_USERS_PATH = '/search/users'
export const SEARCH_ALL_PATH = '/search/all'
