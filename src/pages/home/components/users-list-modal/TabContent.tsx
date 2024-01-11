import ProfileCard from './ProfileCard'

interface TabContentProps {
  users: User[]
}
const TabContent = ({ users }: TabContentProps) => {
  return (
    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-3 w-full min-w-0">
      {users.length > 0 && (
        <div className="p-2 grid grid-flow-dense grid-cols-5 gap-3">
          {users.map(({ _id, fullName, image }) => (
            <ProfileCard
              id={_id}
              fullName={fullName}
              profileImage={image}
            />
          ))}
        </div>
      )}
      {users.length === 0 && (
        <div className="px-2 text-[#949494]">사용자가 없습니다.</div>
      )}
    </div>
  )
}

export default TabContent
