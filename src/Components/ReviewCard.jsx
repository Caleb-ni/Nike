
const ReviewCard = (imgURL, customerName, feedback, rating, star) => {
  return (
    <div className="flex justify-center items-center flec-col">
        <img 
          src={imgURL} 
          alt="customer"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p>{feedback}</p>
        <div>
            <img 
                src={star} 
                width={24}
                height={24}
                className="object-contain m-0"
             />
        </div>
    </div>
  )
}

export default ReviewCard