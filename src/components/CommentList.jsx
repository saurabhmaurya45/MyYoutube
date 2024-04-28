import React from 'react'
import SingleComment from './SingleComment'

const CommentList = ({ commentList }) => {
    return (
        <div>
            {
                commentList?.map((comment,index) => {
                    return (
                        <>
                            <SingleComment comment={comment} key={comment.id+index} />
                            <div className='comment-replies ml-16'>
                                <CommentList commentList={comment.replies?.comments} />
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CommentList