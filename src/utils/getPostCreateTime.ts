
function getPostLiveTime(createdAt: string) {
  const MINUTE = 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  const createTime = new Date(createdAt)
  const nowTime = new Date()

  const compareTime = Math.floor(
    (nowTime.getTime() - createTime.getTime()) / 1000
  )
  if (compareTime < MINUTE) {
    return compareTime === 0 ? '방금 전' : `${compareTime}초 전`
  } else if (compareTime < HOUR) {
    return `${Math.floor(compareTime / MINUTE)}분 전`
  } else if (compareTime < DAY) {
    return `${Math.floor(compareTime / HOUR)}시간 전`
  } else {
    return `${createTime.getFullYear().toString().slice(2, 4)}.${
      createTime.getMonth() + 1
    }.${createTime.getDate()}`
  }

}

export default getPostLiveTime
