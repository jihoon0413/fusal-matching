
import '../css/components/Review.css'

const Review = ({review}) => {

  console.log('review에서',review)
  return (
    <>
    {/* 이모지, 리뷰 수 */}
    <div>
      <div className='review'>
        <div style={{marginRight:"5px", width:'70px', fontWeight:"700"}}className='nickname'>최강기아</div>
        <div style={{marginRight:"10px"}}className='review_emoji'>😎</div>
        <div className='review_content' style={{width:'350px'}}>{review.review}</div>
      </div>
      <hr style={{width:"calc(1300px / 2 - 150px", marginLeft:"10px"}}/>
    </div>
    </>
  )
}

export default Review
