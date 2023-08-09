
const FirstStep = () => {
  return (
    <div className="w-[90%] shadow-lg mx-auto bg-white rounded-md px-4 py-7 text-left">
      <p className="font-bold text-xl mb-2">
        Personal Info
      </p>
      <p className="text-cool-gray text-base">
        Please provide your name, email address, and phone number.
      </p>
      <form action="" method="POST" className="mt-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-marine-blue mb-2">
            Name
          </label>
          <input className="border w-full border-light-gray pl-4 rounded-sm" type="text" placeholder="e.g. Stephen King"/>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-xs font-medium text-marine-blue mb-2">
            Email Address
          </label>
          <input className="border w-full border-light-gray pl-4 rounded-sm" type="email" placeholder="e.g. stephenking@lorem.com"/>
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="block text-xs font-medium text-marine-blue mb-2">
            Phone Number
          </label>
          <input className="border w-full border-light-gray pl-4 rounded-sm" type="tel" placeholder="e.g. +1 234 567 890"/>
        </div>
      </form>
    </div>
  )
}

export default FirstStep