'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/assets/images/(logo)/logo.png'
import { usePathname } from 'next/navigation'

export default function DefaultHeader() {
  const path = usePathname()
  const isShowHeader =
    path === '/' ||
    path === '/courses' ||
    path === '/plans' ||
    path === '/not-found' ||
    (path.includes('/places') && !path.includes('/reviews'))

  if (!isShowHeader) {
    return null
  }

  return (
    <header className='max-w-[375px] relative bg-white w-full h-[55px] pr-[10px] min-h-[55px] flex justify-between items-center border-b-[1px] border-b-header-line'>
      <Link
        href='/'
        className='text-blue-800 text-3xl font-bold cursor-pointer pl-[10px]'
      >
        <Image width={30} height={30} alt='logo' src={logo} />
      </Link>
    </header>
  )
}

// TODO: 아카이브 헤더 추가 -> 알림 및 노티 api 작업 완료 시 추가
/*
function ArchiveHeader() {
  const path = usePathname()
  const isLogin = path?.includes('/login')
  const isNew = path?.includes('/new')
  const isComment = path?.includes('/comments')
  const isAddRegion = path?.includes('/add-region')
  const isUser = path?.includes('/users')
  const isNoti = path?.includes('/notifications')

  const params = useSearchParams()
  const router = useRouter()
  const isCoursesList = params.get('location') && path?.includes('/courses')

  const [isSearch, setIsSearch] = useState(false)

  if (
    isLogin ||
    isNew ||
    isComment ||
    isAddRegion ||
    isNoti ||
    isUser ||
    isCoursesList
  )
    return null

  return (
    <header className='max-w-[375px] relative bg-white w-full h-[55px] pr-[10px] min-h-[55px] flex justify-between items-center border-b-[1px] border-b-header-line'>
      <Link
        href='/'
        className={`text-blue-800 text-3xl font-bold cursor-pointer pl-[10px] ${
          isSearch ? 'hidden' : ''
        }`}
      >
        <Image width={30} height={30} alt='logo' src={logo} />
      </Link>
      <div
        className={
          isSearch ? 'hidden' : 'flex items-center gap-[10px] right-[10px]'
        }
      >
        <Search
          onClick={() => setIsSearch(!isSearch)}
          size={24}
          strokeWidth={1.5}
        />
        <Bell
          onClick={() => {
            router.push('/notifications')
          }}
          size={24}
          strokeWidth={1.5}
        />
      </div>
      {isSearch && (
        <SearchCourse isSearch={isSearch} setIsSearch={setIsSearch} />
      )}
    </header>
  )
}
*/
