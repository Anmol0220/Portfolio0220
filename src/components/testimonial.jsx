export default function Testimonial() {
  return (
    <div className="bg-white p-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">What Customers Say</h2>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/100" alt="Customer Image" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p className="text-gray-600 font-bold">- John Doe</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/100" alt="Customer Image" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p className="text-gray-600 font-bold">- Jane Doe</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/100" alt="Customer Image" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p className="text-gray-600 font-bold">- Bob Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}