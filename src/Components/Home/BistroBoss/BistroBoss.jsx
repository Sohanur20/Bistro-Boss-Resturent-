import img from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='my-40 '>
           <div className="hero h-[500px] rounded-xl" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" bg-white text-gray-700 rounded-xl h-[300px] p-8 mt-20 space-y-10">
      <h1 className=" text-5xl font-bold mt-10">Bistro Boss</h1>
      <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! br Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default BistroBoss;