// const UserProfileInfoWrapper = styled.div`
//   ${tw`flex justify-between gap-3`}
// `

// const UserProfileInfo = styled.div`
//   ${tw`flex flex-col`}
// `

// const OnlineIndicator = styled.div(({ isOnline }) => [
//   tw`w-2 h-2 rounded-full bg-[crimson] self-end mb-1`,
//   isOnline && tw`bg-[limegreen]`
// ])

// const FollowButtons = styled.div`
//   ${tw`flex gap-2 font-semibold mt-3`}
// `

// const UserNameWrapper = styled.div`
//   ${tw`flex items-center gap-2`}
// `

// <UserProfileInfoWrapper>
//               <UserProfileInfo>
//                 <UserNameWrapper>
//                   <p className="font-bold text-2xl">User</p>
//                   <p className="text-sm text-[#333] self-end">
//                     {userInfo?.fullName}
//                   </p>
//                   <OnlineIndicator isOnline={userInfo?.isOnline} />
//                 </UserNameWrapper>
//                 <p className="text-[#333]">{userInfo?.email}</p>
//                 <FollowButtons>
//                   <button>팔로워 {userInfo?.followers.length}</button>
//                   <button>팔로잉 {userInfo?.following.length}</button>
//                 </FollowButtons>
//               </UserProfileInfo>
//               <div className="self-center mb-3">
//                 <div className="flex gap-2 items-center">
//                   <button>
//                     <img
//                       src="src/assets/icons/chat.svg"
//                       alt="chat"
//                     />
//                   </button>
//                   <button>
//                     <img
//                       src="src/assets/icons/following.svg"
//                       alt="following"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </UserProfileInfoWrapper>