import searchAll from '@/apis/search/searchAll'
import searchUser from '@/apis/search/searchUser'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'

const Search = () => {
  const [searchedPost, setSearchedPost] = useState<Post[]>([])
  const [searchedUser, setSearchedUser] = useState<User[]>([])
  const [keyword, setKeyword] = useState<string>('')

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearchOnUser = async (query: string) => {
    const { users } = await searchUser({ query })
    setSearchedUser(users)
  }

  const handleSearchOnAll = async (query: string) => {
    const { posts, users } = await searchAll({ query })
    setSearchedPost(posts)
    setSearchedUser(users)
  }

  const handleKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    query: string
  ) => {
    const { key } = e
    if (key === 'Enter') {
      await handleSearchOnAll(query)
    }
  }

  // TODO: 추후 라우터를 이용하여 이전 페이지로 돌아가는 기능 추가
  const handleClickPrevButton = () => {}

  return (
    <div className="w-11/12 h-screen mx-auto">
      <SearchBar
        keyword={keyword}
        onClickPrevButton={handleClickPrevButton}
        onSearch={handleSearchOnAll}
        onChange={handleChangeKeyword}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default Search
