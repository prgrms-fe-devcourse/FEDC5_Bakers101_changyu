interface User {
  coverImage?: string // 커버 이미지
  image?: string // 프로필 이미지
  role: string
  emailVerified?: boolean // 사용되지 않음
  banned?: boolean // 사용되지 않음
  isOnline: boolean
  posts: Post[]
  likes: Like[]
  comments: string[]
  followers: []
  following: Following[]
  notifications: Notification[]
  messages: Message[]
  _id: string
  fullName: string
  email: string
  createdAt: string
  updatedAt: string
  username?: string
}

interface Channel {
  authRequired?: boolean // 사용되지 않음
  posts: string[]
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

interface Post {
  likes: Like[]
  comments: Commnet[]
  _id: string
  image?: string
  imagePulicId?: string
  title: string
  channel: Channel | string
  author: User
  createdAt: string
  updatedAt: string
}

interface Like {
  _id: string
  user: string // 사용자 id
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}

interface Comment {
  _id: string
  comment: string
  author: User
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}

interface Notification {
  seen: boolean
  _id: string
  author: User
  user: User | string
  post?: string | null // 포스트 id
  follow?: string // 사용자 id
  comment?: Comment
  like?: Like
  message?: string // 메시지 id
  createdAt: string
  updatedAt: string
}

interface Follow {
  _id: string
  user: string // 사용자 id
  follower: string // 사용자 id
  createdAt: string
  updatedAt: string
}

interface Conversation {
  _id: string
  message: Message
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
}

interface Message {
  _id: string
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
  updatedAt: string
}

interface Following {
  _id: string
  user: string
  follower: string
  createdAt: string
  updatedAt: string
  __v: number
}


interface Error {
  password: string
  confirmPassword: string
  fullName: string
  username: string
}