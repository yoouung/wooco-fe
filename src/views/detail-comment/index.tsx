'use client'

import { ChevronLeft, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Spacer from '@/src/shared/ui/Spacer'
import CardComment from '@/src/features/comment/card-comment'
import type { CommentType } from '@/src/entities/comment/type'
import { useForm } from 'react-hook-form'
import { useCreateComment } from '@/src/entities/comment/query'

interface DetailCommentProps {
  courseId: string
  comments: CommentType[]
}

export default function DetailComment({
  courseId,
  comments,
}: DetailCommentProps) {
  const router = useRouter()
  const { mutate } = useCreateComment()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      contents: '',
    },
  })

  const onSubmit = async (data: { contents: string }) => {
    try {
      mutate(
        { id: courseId, contents: data.contents },
        {
          onSuccess: () => {
            reset()
          },
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='h-100% flex flex-col'>
      <section className='max-w-[375px] relative bg-white w-full h-[55px] px-[20px] min-h-[55px] flex justify-between items-center border-b-[1px] border-b-header-line'>
        <ChevronLeft
          onClick={() => router.replace(`/courses/${courseId}`)}
          size={24}
          strokeWidth={1.5}
          className='cursor-pointer'
        />
        <p className='font-bold text-[17px]  px-[20px] py-[8px] rounded-[20px]'>
          댓글
        </p>
        <div className='w-[24px] h-[24px]' />
      </section>
      <Spacer height={20} />
      <div className='px-[30px] flex flex-col gap-[30px]'>
        {comments.map((comment) => {
          return <CardComment key={comment.id} comment={comment} />
        })}
        <Spacer height={20} />
      </div>
      <div className='shadow-custom bg-white max-w-[375px] fixed bottom-0 w-full h-[70px] px-[20px] flex items-center'>
        <form
          className='w-full px-[15px] gap-[10px] h-[40px] border-[1px] border-brand bg-bright-gray rounded-full flex items-center justify-between'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('contents')}
            type='text'
            placeholder='댓글을 작성해주세요.'
            className='w-full h-full bg-transparent focus:outline-none placeholder:text-sub placeholder:opacity-50'
          />
          <button type='submit'>
            <Send
              size={24}
              className={`cursor-pointer ${
                isDirty ? 'text-brand' : 'text-dark-gray'
              }`}
              strokeWidth={1.5}
            />
          </button>
        </form>
      </div>
    </div>
  )
}
