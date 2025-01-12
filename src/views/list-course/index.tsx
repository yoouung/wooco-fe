'use client'

import { useRouter } from 'next/navigation'
import Spacer from '@/src/shared/ui/Spacer'
import TrendingCourse from '@/src/features/course/card-trend-course'
import FloatingWriteButton from '@/src/widgets/FloatingWriteButton'
import { Fragment } from 'react'
import { CourseType } from '@/src/entities/course/type'
import { FavoriteRegionType } from '@/src/entities/user/type'

interface ListCourseProps {
  courses: CourseType[]
  favoriteRegions: FavoriteRegionType[]
}

export default function ListCourse({
  courses,
  favoriteRegions,
}: ListCourseProps) {
  const router = useRouter()

  return (
    <div className='w-full h-[calc(100%-50px)] py-[20px] flex flex-col'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center h-[40px] px-[20px]'>
          <div className='flex flex-col justify-start'>
            <span className='text-headline font-bold text-brand'>
              관심 지역
            </span>
            <span className='text-description text-[10px]'>
              지역별로 새로운, 인기 코스 확인해요
            </span>
          </div>
          <button
            className='border-none'
            onClick={() => {
              router.push('/courses/add-region')
            }}
          >
            추가하기
          </button>
        </div>
        <div className='flex flex-row items-center h-[30px] gap-[8px] my-[15px] overflow-auto px-[20px]'>
          {favoriteRegions.map((region) => (
            <div
              key={region.id}
              className='inline-block text-center whitespace-nowrap text-white font-bold text-[12px] h-[28px] rounded-[20px] px-[20px] py-[5px] bg-container-light-blue cursor-pointer'
              onClick={() => router.push(`/courses/${region.value}`)}
            >
              {region.value}
            </div>
          ))}
        </div>
      </div>
      <Spacer className='bg-bright-gray' height={8} />
      <div className='flex flex-col w-full px-[20px]'>
        <div className='flex flex-row justify-between items-center h-[40px] my-[20px]'>
          <div className='flex flex-col justify-start'>
            <span className='text-headline font-bold text-brand'>
              실시간 인기
            </span>
            <span className='text-description text-[10px]'>
              실시간 인기 코스를 확인해요
            </span>
          </div>
          <button className='border-none'>더보기</button>
        </div>
        <div className='flex flex-col items-center gap-[12px]'>
          {courses.map((course) => (
            <Fragment key={course.id}>
              <TrendingCourse course={course} />
              <Spacer className='bg-bright-gray' height={8} />
            </Fragment>
          ))}
        </div>
      </div>
      <FloatingWriteButton />
    </div>
  )
}
