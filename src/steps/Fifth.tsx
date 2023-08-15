const Fifth = () => {
  return (
    <div className="absolute md:py-4 md:px-20 md:relative md:flex md:items-center top-24 md:top-0">
      <div className='w-[90%] md:w-full shadow-lg md:shadow-none mx-auto bg-white rounded-md px-4 md:px-0 py-7 text-center'>
          <img className='mx-auto mb-4 md:mb-6 w-12 md:w-20' src="/icon-thank-you.svg" alt="checkmark icon inside a red circle"  />
          <h1 className='text-2xl md:text-4xl mb-3 font-bold text-center'>Thank you!</h1>
          <p className='text-cool-gray'>
              Thanks for confirming your subscription!
              We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
          </p>
      </div>
    </div>
  )
}

export default Fifth