import searchAll from '@/apis/search/searchAll'
import searchUser from '@/apis/search/searchUser'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import useSearch from '@/hooks/useSearch'

const Search = () => {
  const [searchedPost, setSearchedPost] = useState<Post[]>([])
  const [searchedUser, setSearchedUser] = useState<User[]>([])

  const {
    value,
    type,
    error,
    isLoading,
    handleChange,
    handleSearch,
    handleClickFilter
  } = useSearch({
    initialValue: '',
    onSearch: async (query) => {
      if (type === 'user') {
        const { users } = await searchUser({ query })
        setSearchedUser(users)
        return
      } else if (type === 'all') {
        const { posts, users } = await searchAll({ query })
        setSearchedPost(posts)
        setSearchedUser(users)
        return
      }
    },
    validate: (query) => {
      if (query.trim().length === 0) {
        return '검색어를 입력해주세요'
      } else {
        return ''
      }
    }
  })

  // TODO: 추후 라우터를 이용하여 이전 페이지로 돌아가는 기능 추가
  const handleClickPrevButton = () => {}

  return (
    <div className="w-11/12 h-screen mx-auto">
      <SearchBar
        keyword={value}
        error={error}
        onChange={handleChange}
        onSearch={handleSearch}
        onPressEnter={handleSearch}
        onClickPrevButton={handleClickPrevButton}
      />
    </div>
  )
}

export default Search
