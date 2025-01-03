
  import Card2 from "./Card2"
  import phone from "@/app/image/phone.png"
  import newambu from "@/app/image/newambulance.png"
  import map from "@/app/image/MapsicleMap.png"
  import Image from "next/image"
  import miniambu from "@/app/image/ambulance1.png"
  import people1 from "@/app/image/people1.png"
  import people2 from "@/app/image/people2.png"
  import people3 from "@/app/image/people3.png"
  import people4  from "@/app/image/people4.png"
  import zigzag1  from "@/app/image/zigzag1.png"
  import zigzag2 from "@/app/image/zigzag2.png"
  import zigzag3 from "@/app/image/zigzag3.png"
  import Footer from "./Footer"




   
   const Choose = () => {
     return (
       <div>

           <h1 className='font-poppins text-[32px] sm:text-[40px] md:text-[45px] font-semibold leading-[40px] sm:leading-[55px] md:leading-[65.25px]  text-[#2B3765] text-center mt-12'>
            Why choose us
           </h1>

           <div  className="grid gap-4 sm:grid-cols-3 grid-cols-2   mt-6"> 
             
             <Card2  img={newambu}  title = {"Quick amubulance booking"}     subtitle={"Ambulance booking now just in 3 steps."} />
             <Card2  img={phone}   title={"24*7  Service"} subtitle={"Book at any time of the day."}/>
             <Card2 img={newambu}  title={"Varities of ambulance"}  subtitle ={"Choose the one your patient needs the most."}/>
             <Card2  img={newambu}  title = {"On Ambulance facilities"}     subtitle={"Providing necessary medical aid and health profesionals. "} />
             <Card2  img={newambu}   title={"Readily Available"} subtitle={"Book at any time of the day."}/>
             <Card2 img={phone}  title={"Varities of ambulance"}  subtitle ={"Choose the one your patient needs the most."}/>


              
 
           </div>

           <h1 className='font-poppins text-[32px] sm:text-[40px] md:text-[45px] font-semibold leading-[40px] sm:leading-[55px] md:leading-[65.25px]  text-[#2B3765] text-center mt-12'>
            Location
           </h1>  

           {/* map */}
           
           <div  className="items-center   flex justify-center  mt-10">
           <Image   src={map}  alt="map"    className="w-[413px] h-[299px]   sm:w-[1187px]  sm:h-[708px]"/>
            </div>

           {/* flex div */}
            <div className="flex  flex-row   justify-evenly  mt-12  ">
                 
                 {/* first div */}
                 <div  className="flex flex-col justify-center items-center   gap-y-2">

                     <div    className="sm:w-[120px]   sm:h-[120px]   w-[70px]  h-[70px]  rounded-full   bg-[#E5E9FB]  flex items-center justify-center ">

                      <Image  src={miniambu}    alt="ambu"  className="w-[30px]  h-[30px]   sm:w-[66px]   sm-h-[66px]" />

                     </div>


                       <div  className="text-center  gap-y-3 ">
                       <p className="text-lg sm:text-xl font-bold text-[#2B3765] items-center">ALS</p>
                            <p className="text-xs sm:text-sm text-gray-600 hidden lg:block">(Advance life support)</p>
                      </div>


                 </div>
                 {/* first closing div */}


                  {/* second div */}
                  <div  className="flex flex-col justify-center items-center   gap-y-2">

                        <div    className="sm:w-[120px]   sm:h-[120px]   w-[70px]  h-[70px]  rounded-full   bg-[#E5E9FB]  flex items-center justify-center ">

                        <Image  src={miniambu}    alt="ambu"  className="w-[30px]  h-[30px]   sm:w-[66px]   sm-h-[66px]" />

                         </div>


                          <div  className="text-center  gap-y-4">
                          <p className="text-lg sm:text-xl font-bold text-[#2B3765] items-center">BLS</p>
                          <p className="text-xs sm:text-sm text-gray-600  hidden lg:block">(Basic life support)</p>
                          </div>


                  </div>
                  {/* third closing div */}


                  <div  className="flex flex-col justify-center items-center  gap-y-2">

                       <div    className="sm:w-[120px]   sm:h-[120px]   w-[70px]  h-[70px]  rounded-full   bg-[#E5E9FB]  flex items-center justify-center ">

                        <Image  src={miniambu}    alt="ambu"  className="w-[30px]  h-[30px]   sm:w-[66px]   sm-h-[66px]" />

                       </div>


                         <div  className="text-center  ">
                            <p className="text-lg sm:text-xl font-bold text-[#2B3765] items-center">PTS</p>
                            <p className="text-xs sm:text-sm text-gray-600  hidden lg:block">(Patient trasport service)</p>
                          </div>


                  </div>
                  {/* third  closing div */}




                 
            </div>
            {/* {flex closing div} */}


            {/* button */}
            <div  className='mt-14 flex items-center  justify-center'>

                <button className="bg-[#121E52] text-white sm:px-7 py-2   px-6  rounded-full md:rounded-md  lg:rounded-md font-medium hover:bg-[#0F172A] w-fit  items-center  flex justify-center">
                  Book Ambulance
                 </button>

            </div>


             {/* Join our team  */}

             <h1 className='font-poppins text-[32px] sm:text-[40px] md:text-[45px] font-semibold leading-[40px] sm:leading-[55px] md:leading-[65.25px]  text-[#2B3765] text-center mt-20'>
                Join our team 
             </h1>

             {/* team details */}


             <div   className="relative  flex flex-col items-center justify-center  mt-20">
                
                   <div>
                         <div className="text-center font-poppins text-[#121E52] sm:text-[32px] sm:leading-[46.4px] sm:font-normal text-[12px] leading-[17.4px] font-medium">Join our vast network of service providers</div>
                         <div className="text-center font-poppins text-[#7A7A7A] text-[10px] leading-[14.5px] font-normal sm:text-[24px] sm:leading-[34.8px]">Be an integral part of our team of community </div>
                         <div  className="text-center font-poppins text-[#7A7A7A] text-[10px] leading-[14.5px] font-normal sm:text-[24px] sm:leading-[34.8px]"> saviours.</div>

                   </div>

                  

                 <div className="sm:w-[83px] sm:h-[83px] w-[40px] h-[40] bg-[#ECFAFA] rounded-full flex items-center justify-center  transform  sm:-translate-x-[450px]   sm:-translate-y-[110px]  -translate-x-[130px]    -translate-y-[90px]">
                    <Image src={people1} alt="people" className="sm:w-[80px] sm:h-[80px]  w-[40px] h-[40px] rounded-full  object-cover" />
                 </div>

                 <div className="sm:w-[83px] sm:h-[83px] w-[40px] h-[40] bg-[#ECFAFA] rounded-full flex items-center justify-center  transform  sm:-translate-x-[200px]   sm:-translate-y-[5px]  -translate-x-[70px]    -translate-y-6">
                    <Image src={people2} alt="people" className="sm:w-[80px] sm:h-[80px]  w-[40px] h-[40px] rounded-full  object-cover" />
                 </div>

                  <div className="sm:w-[83px] sm:h-[83px] w-[40px] h-[40] bg-[#ECFAFA] rounded-full flex items-center justify-center  transform  sm:translate-x-[270px]   sm:-translate-y-[123px]  translate-x-[85px]    -translate-y-[35px]">
                    <Image src={people3} alt="people" className="sm:w-[80px] sm:h-[80px]  w-[40px] h-[40px] rounded-full  object-cover" />
                 </div>

                 <div className="sm:w-[83px] sm:h-[83px] w-[40px] h-[40] bg-[#ECFAFA] rounded-full flex items-center justify-center  transform  sm:translate-x-[450px]   sm:-translate-y-[400px]  translate-x-[150px]    -translate-y-[180px]">
                    <Image src={people4} alt="people" className="sm:w-[80px] sm:h-[80px]  w-[40px] h-[40px] rounded-full  object-cover" />
                 </div> 


                 <Image   src={zigzag1} alt="zig " className="sm:w-[188px]  sm-h-[145px] w-[66px]  sm:h-[51px] absolute  transform sm:-translate-x-[350px]   sm:-translate-y-[60px]  -translate-x-28  -translate-y-16"/>


                 <Image  src={zigzag2}   alt="zig1" className=" w-[146px]  h-[25px]  sm:w-[365px] sm:h-[63px] absolute transform  sm:translate-x-[40px]  sm:-transform-y-[10px] " />

                 <Image  src={zigzag3}   alt="zig1" className=" w-[35px]  h-[76px]  sm:w-[69px] sm:h-[149px] absolute transform  sm:translate-x-[380px] sm:-translate-y-24   translate-x-[120px]   -translate-y-[35px]" />



                   
             </div>

             {/* footer */}
          
            <Footer/>






           



       </div>
     )
   }
   
   export default Choose
   