import Image from 'next/image'
import { FormEvent } from 'react';
import { BiLike, BiComment } from "react-icons/bi";


export default function Page() {
  return (
    <div className="my-2 container mx-auto flex flex-col items-center">
      <h2 className="text-center uppercase text-blue-600 text-2xl subpixel-antialiased">Wall of Fame</h2>
      <div className="rounded-xl  shadow-xl w-11/12 h-auto my-10 bg-white px-8">
        <div className="w-full flex flex-col items-center relative  space-y-2">
        <Image
          className="bg-white rounded-full shadow-md w-16 h-16 shadow-slate-500 absolute -top-8"
          src="/profile.svg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <p className="pt-8">Employee 1 has recognized Employee 2</p>
        <p>in Core Value</p>
        <Image
          className="shadow-sm shadow-slate-500 w-full h-2/3"
          src="/wq.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <p className="self-start">We Thank you for your contribution. </p>
        <div className="flex justify-start w-full text-lg text-gray-500">
        <p className="flex mr-4">
            <BiLike />
            <span className="text-base ml-1 leading-4">3 Likes</span>
            </p>
          <p className="flex">
            <BiComment />
            <span className="text-base ml-1 leading-4">5 Comments</span>
            </p>
        </div>
        </div>
          
        <div className="text-2xl text-gray-700 my-8 border-t flex justify-center">
          <div className="flex w-3/4 mt-4 justify-between">
            <p className="flex hover:bg-blue-200 rounded-md w-40 h-8 flex justify-center items-center cursor-pointer">
              <BiLike />
              <span className="text-base ml-1 leading-12">Like</span>
              </p>
            <p className="fflex hover:bg-blue-200 rounded-md w-40 h-8 flex justify-center items-center cursor-pointer">
              <BiComment />
              <span className="text-base ml-1 leading-12">Comment</span>
              </p>
          </div>
        </div>
        <div>
          <CommentSection />
        </div>
      </div>
    </div>
  );
}

export function CommentSection(){
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
  return (
    <div className="mb-8"> 
      <div className='mb-4 shadow-md bg-gray-100 p-4 flex'>
        <p className='mr-4'>Person Name: </p>
        <p>Comment Details</p>
      </div>
      <form onSubmit={onSubmit}>
      <textarea name="Share your thoughts..."  className="w-4/5 border-2 mr-4 border-blue-200"> </textarea>
      <button type="submit" className='bg-blue-200 w-28 h-8 rounded-sm'>Comment</button>
    </form>
    </div>
    
  )
}
