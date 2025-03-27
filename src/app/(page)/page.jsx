import '@/app/Font.css'
import PersonalData from '@/components/PersonalData';

export default function Home() {
  return (
    <> 
      <div className="w-full h-screen bg-gray-100 overflow-x-hidden">
        <div className="w-full h-full absolute z-0 overflow-x-hidden">
          <span className="w-72 h-72 md:w-[960px] md:h-[960px] rounded-full bg-teal-300 animate-bounce absolute bottom-0 left-[-100px] md:left-[-500px]"></span>
        </div>
        <div className="w-full h-20 md:h-40"></div>
        <PersonalData />
      </div>
    </>
    
  );
}
