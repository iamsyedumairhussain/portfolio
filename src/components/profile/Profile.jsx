import Services from "../introduction/Services";
import SocialMedia from "../common/socialMedia/SocialMedia";
import Tech from "../introduction/Tech";
import TechImage from "../introduction/TechImage";
import browser from '../../assets/images/service-images/browser.png'
import api from '../../assets/images/service-images/api.png'
import cloud from '../../assets/images/service-images/cloud-computing.png'
import cpu from '../../assets/images/service-images/cpu.png'
import database from '../../assets/images/service-images/database.png'
import support from '../../assets/images/service-images/chat-box.png'

const Profile = () => {
  const informationSummaryData = [
    {
      id: 1,
      title: "",
      description: "Custom Software development",
      image: browser
    },
    {
      id: 2,
      title: "",
      description: "3rd party API integrations",
      image: api
    },
    {
      id: 3,
      description: "Backend architecture design",
      image: cpu

    },
    {
      id: 4,
      description: "Database design & optimization",
      image: database
    },
    {
      id: 5,
      description: "Cloud infrastructure setup (AWS)",
      image: cloud
    },
    {
      id: 6,
      description: "Maintenance & ongoing support",
      image: support
    },
  ];
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5  lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className=" flex max-md:flex-col justify-between items-center gap-6">
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <div className="mx-auto lg:mx-0 relative">
              <div className="grid max-xxs:grid-flow-col grid-cols-2 w-fit mt-1 gap-3">

                {informationSummaryData.map((item) => (
                  <Services key={item.id} item={item} isServices={true} />
                ))}
              </div>
            </div>
          </div>
          {/* Social media section */}
          <div className="mt-5">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-3`}
          >
            I am a Software Developer
          </h2>
          <h2
            className={`text-xl xxs:text-3xl sm:text-4xl lg:text-[28px] text-[min(20px,28px)] max-md:text-center font-semibold mb-5`}
          >
            Technology stack
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <Tech />
            <TechImage />
   </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
