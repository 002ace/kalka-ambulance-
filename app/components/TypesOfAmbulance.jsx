import React from 'react'
import Card from './Card'
import border from "@/app/image/border.png"
import ruppees from "@/app/image/rs.png"
import car1 from "@/app/image/car1.png"
import car2 from "@/app/image/car2.png"
import location from  "@/app/image/location.png"

import Image from 'next/image'

import Choose from './Choose'


const TypesOfAmbulance = () => {
  return (
   
    <div className="">
    <h1  className="font-poppins text-[32px] sm:text-[40px] md:text-[45px] font-semibold leading-[40px] sm:leading-[55px] md:leading-[65.25px]  text-[#2B3765] text-center mt-12">
      Types of Ambulance
    </h1>

     <div   className='flex flex-col gap-y-4   '>
       

       <div  className='flex flex-col gap-y-4 mt-10 sm:flex-row  sm:justify-around'>
       <Card   title={"ALS"}   subtitle={"Advance Life support"}/>
       <Card   title ={"BLS"}  subtitle={"Basic life support"} />
       <Card   title= {"PTS"}  subtitle={"Patient trasport service"} />

       </div>

       <div  className='  hidden md:flex    justify-center  mt-16  '>

       <button className="bg-[#121E52] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0F172A] w-fit  items-center  flex justify-center">
          View Details
        </button>

       </div>


      
       

       

     </div>




  

      <div>

           <h1  className="font-poppins text-[32px] sm:text-[40px] md:text-[45px] font-semibold leading-[40px] sm:leading-[55px] md:leading-[65.25px]  text-[#2B3765] text-center mt-12">
              How to book
           </h1>


           <div    className="h-[430px] sm:h-[600px] md:h-[800px] lg:h-[1000px] w-full bg-[#E5E9FB]  mt-8 relative  " >  

                
                  <div  className='hidden md:block'> 

                  <Image   src={border} alt="border" className='absolute  lg:h-[600px]   transform  translate-x-[70%]  translate-y-[200px]' />
                  
                  <div  className='rounded-full    bg-[#121E52]   w-[20px] h-[20px] absolute  transform translate-x-[438px]  translate-y-[192px]'  >

                  </div>


                  <div  className='rounded-full    bg-[#121E52]   w-[20px] h-[20px] absolute  transform translate-x-[412px]  translate-y-[628px]'  >

                  </div>


                  <div  className='rounded-full    bg-[#121E52]   w-[20px] h-[20px] absolute  transform translate-x-[1010px]  translate-y-[780px]'  >

                  </div>

                  <div  className='rounded-full    bg-[#121E52]   w-[20px] h-[20px] absolute  transform translate-x-[1010px]  translate-y-[340px]'  >

                  </div>


                  <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[200px]   translate-y-[140px]">

                      <div   className='w-[137px]  h-[137px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                           <Image src={location}   alt="alt"   />

                      </div>

                      <p className="font-inter text-2xl font-medium leading-[38.73px]  text-[#000000]">Step one</p>


                      <p className="font-inter text-xl font-semibold leading-[29.05px] text-[#8B8B8B]">Select your pick and drop</p>






                  </div>


                  <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[200px]   translate-y-[580px]">

                          <div   className='w-[137px]  h-[137px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                            <Image src={ruppees}   alt="alt"   />

                           </div>

                           <p className="font-inter text-2xl font-medium leading-[38.73px]  text-[#000000]">Step three</p>


                           <p className="font-inter text-xl font-semibold leading-[29.05px] text-[#8B8B8B]">Pay your desired pay</p>


                  </div>


                  <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[1020px]   translate-y-[728px]">

                           <div   className='w-[137px]  h-[137px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                             <Image src={car2}   alt="alt"   />

                            </div>

                            <p className="font-inter text-2xl font-medium leading-[38.73px]  text-[#000000]">Step four</p>


                            <p className="font-inter text-xl font-semibold leading-[29.05px] text-[#8B8B8B]">Ambulance is on its way</p>


                  </div>



                  <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[1020px]   translate-y-[290px]">

                           <div   className='w-[137px]  h-[137px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                             <Image src={car1}   alt="alt"   />

                            </div>

                            <p className="font-inter text-2xl font-medium leading-[38.73px]  text-[#000000]">Step two</p>


                            <p className="font-inter text-xl font-semibold leading-[29.05px] text-[#8B8B8B]">Choose type of ambulance</p>


                  </div>

                    
                    
                  </div>


                  <div  className=' md:hidden  lg:hidden '> 

                        <Image   src={border} alt="border" className='absolute  h-[324px] w-[137px]  transform  translate-x-[130px]   translate-y-10' />

                        <div  className='rounded-full    bg-[#121E52]   w-[8px] h-[8px] absolute  transform translate-x-[130px]  translate-y-[35px]'  >

                        </div>


                         <div  className='rounded-full    bg-[#121E52]   w-[8px] h-[8px] absolute  transform translate-x-[125px]  translate-y-[271px]'  >

                         </div>


                           <div  className='rounded-full    bg-[#121E52]   w-[8px] h-[8px] absolute  transform translate-x-[260px]  translate-y-[358px]'  >

                           </div>

                            <div  className='rounded-full    bg-[#121E52]   w-[8px] h-[8px] absolute  transform translate-x-[262px]  translate-y-[119px]'  >

                            </div>


                        <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[35px]   translate-y-[20px]">

                              <div   className='w-[45px]  h-[48.37px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                               <Image src={location}   alt="alt"   width={19} height={21}  />

                           </div>

                          <p className="font-inter text-xs font-medium leading-[14.52px]  text-[#000000]">Step one</p>


                           <p className="text-[#8B8B8B] font-inter text-[10px] font-semibold leading-[12.1px]">Select your pick and drop</p>






                         </div>

                         <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[40px]   translate-y-[250px]">

                                     <div   className='w-[45px]  h-[48.37px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                                        <Image src={ruppees}   alt="alt"   width={19} height={21}  />

                                       </div>

                                       <p className="font-inter text-xs font-medium leading-[14.52px]  text-[#000000]">Step three</p>


                                       <p className="text-[#8B8B8B] font-inter text-[10px] font-semibold leading-[12.1px]">Pay your desired pay</p>






                            </div>

                            <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[280px]   translate-y-[335px]">

                                 <div   className='w-[45px]  h-[45px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                                           <Image src={car2}   alt="alt"   width={19} height={19}  />

                                   </div>

                                  <p className="font-inter text-xs font-medium leading-[14.52px]  text-[#000000]">Step four</p>


                                    <p className="text-[#8B8B8B] font-inter text-[10px] font-semibold leading-[12.1px]"> On its way</p>






                            </div>
                            
                        <div  className = "absolute    flex flex-col items-center space-y-2  transform translate-x-[280px]   translate-y-[98px]">

                          <div   className='w-[45px]  h-[45px]  rounded-full  bg-[#FFFFFF]   flex  items-center justify-center'>

                                    <Image src={car1}   alt="alt"   width={19} height={19}  />

                            </div>

                           <p className="font-inter text-xs font-medium leading-[14.52px]  text-[#000000]">Step two</p>


                              <p className="text-[#8B8B8B] font-inter text-[10px] font-semibold leading-[12.1px]"> On its way</p>
 





                           
                        </div>


                         

  
  
                           </div>
                  


                  


                 




           </div>  



          




           











      </div>

      {/* how to choose */}
      <Choose />



     


     

    
    






      
   
  </div>
  )
}

export default TypesOfAmbulance

