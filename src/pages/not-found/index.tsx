import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-3">
        <img
          src="src/assets/not-found.png"
          alt="404 Thumbnail"
          className="w-28 h-30"
        />
        <h1 className="text-3xl">굽고 있는 빵이 없어요!</h1>
        <Link
          to="/home"
          className="underline underline-offset-4">
          돌아가기
        </Link>
      </div>
    </div>
  )
}

export default NotFound
