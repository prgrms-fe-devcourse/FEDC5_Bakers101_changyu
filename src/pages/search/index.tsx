import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import FilteredList from './components/FilteredList'
import searchAll from '@/apis/search/searchAll'
import searchUser from '@/apis/search/searchUser'
import useSearch from '@/hooks/useSearch'

const Search = () => {
  const navigate = useNavigate()
  const [searchedPost, setSearchedPost] = useState<Post[]>([])
  const [searchedUser, setSearchedUser] = useState<User[]>([])
  const [isSearched, setIsSearched] = useState(false)

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
      } else if (type === 'all') {
        const { posts, users } = await searchAll({ query })
        setSearchedPost(posts)
        setSearchedUser(users)
      }
      setIsSearched(true)
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
  const handleClickPrevButton = () => {
    navigate(-1)
  }

  return (
    <div className="w-11/12 h-screen mx-auto flex flex-col gap-4">
      <SearchBar
        keyword={value}
        error={error}
        onChange={handleChange}
        onSearch={handleSearch}
        onPressEnter={handleSearch}
        onClickPrevButton={handleClickPrevButton}
      />
      <div className="pl-3 flex flex-col gap-5 grow">
        <Filter
          onClickFilter={handleClickFilter}
          selectedFilterItem={type as 'user' | 'all'}
        />
        <FilteredList
          type={type as 'user' | 'all'}
          users={searchedUser}
          posts={searchedPost}
          isSearched={isSearched}
        />
      </div>
    </div>
  )
}

export default Search
