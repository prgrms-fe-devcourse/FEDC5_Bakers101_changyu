/* Base Url */
const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr'
/* 어드민 */
const CREATE_CHANNEL_BY_ADMIN_PATH = '/channels/create'

/* 인증 */
const LOGIN_PATH = '/login'
const SIGNUP_PATH = '/signup'
const LOGOUT_PATH = '/logout'

/* 사용자 */
const GET_ALL_USER_LIST_PATH = '/users/get-users'
const GET_USER_PROFILE_PATH = '/users'
const UPDATE_PROFILE_IMAGE_PATH = '/users/upload-photo'
const UPDATE_COVER_IMAGE_PATH = '/users/upload-photo'

/* 설정 */
const UPDATE_MY_PROFILE_PATH = '/settings/update-user'
const UPDATE_MY_PASSWORD_PATH = '/settings/update-password'

/* 채널 */
const GET_CHANNEL_LIST_PATH = '/channels'
const GET_CHANNEL_DETAIL_PATH = '/channel'

/* 포스트 */
const GET_POST_LIST_BY_CHANNEL_PATH = '/posts/channel'
const GET_POST_LIST_BY_USER_PATH = '/posts/author'
const CREATE_POST_PATH = '/posts/create'
const GET_DETAIL_POST_PATH = '/posts'
const UPDATE_POST_PATH = '/posts/update'
const DELETE_POST_PATH = '/posts/delete'

/* 좋아요 */
const LIKE_POST_PATH = '/likes/create'
const UNLIKE_POST_PATH = '/likes/delete'

/* 댓글 */
const CREATE_COMMENT_PATH = '/comments/create'
const DELETE_COMMENT_PATH = '/comments/delete'

/* 알림 */
const GET_NOTIFICATIONS_PATH = '/notifications'
const UPDATE_NOTIFICATIONS_PATH = '/notifications/seen'
const CREATE_NOTIFICATIONS_PATH = '/notifications/create'

/* 팔로우 */
const FOLLOW_PATH = '/follow/create'
const UNFOLLOW_PATH = '/follow/delete'

/* 메시지 */
const GET_USER_MESSAGE_PATH = '/messages/conversations'
const GET_MESSAGE_LIST_BY_USER_PATH = '/messages'
const CREATE_MESSAGE_PATH = '/messages/create'
const UPDATE_MESSAGE_PATH = '/messages/update-seen'

/* 검색 */
const SEARCH_USERS_PATH = '/search/users'
const SEARCH_ALL_PATH = '/search/all'
