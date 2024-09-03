import { Linkedin, Twitter, Globe } from 'lucide-react';
import pfpp from '../assets/pfpp.webp'

// eslint-disable-next-line react/prop-types
const TeamMember = ({ name, title, description, isHiring }) => (
  <div className="flex flex-col items-center text-center">
    {/* <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center"> */}
      <img
        className="w-12 h-12 text-gray-400"
        src={pfpp}
      />
    {/* </div> */}
    <h3 className="font-bold">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{title}</p>
    <p className="text-sm mb-4">{description}</p>
    {!isHiring && (
      <div className="flex space-x-2">
        <Linkedin size={20} />
        <Twitter size={20} />
        <Globe size={20} />
      </div>
    )}
    {isHiring && (
      <button className="text-sm text-blue-600 hover:underline">Open positions</button>
    )}
  </div>
);

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Event Planner",
      description: "With over 10 years of experience in planning memorable events."
    },
    {
      name: "Jane Smith",
      title: "Wedding Specialist",
      description: "Passionate about creating dream weddings that exceed expectations."
    },
    {
      name: "Michael Johnson",
      title: "Party Coordinator",
      description: "Bringing joy and excitement to every celebration with meticulous planning."
    },
    {
      name: "Sarah Davis",
      title: "Event Designer",
      description: "Transforming venues into stunning spaces that leave a lasting impression."
    },
    {
      name: "We're hiring!",
      title: "Join our team of talented event professionals",
      description: "",
    },
    // Add three more placeholder team members
    ...Array(3).fill({
      name: "Full name",
      title: "Job title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    })
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-600 mb-2">Experienced</p>
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <p className="mb-8">Get to know the talented individuals behind our success.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-4">We are hiring!</h3>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Open positions
        </button>
      </div>
    </div>
  );
};

export default MeetOurTeam;