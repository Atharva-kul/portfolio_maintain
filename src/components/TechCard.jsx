import {TechCards} from './Cards'

const stackData = [
  { id: 1, label: "Javascript: React" },
  { id: 2, label: "Css: Tailwind" },
  { id: 3, label: "Animation: Gsap" },
  { id: 4, label: "Backend: Node (Express)" },
  { id: 5, label: "Database: MongoDB" },
  { id: 6, label: "Database: MongoDB" },
  { id: 7, label: "Database: MongoDB" },
];

export const TechStack = () => {
    const total =stackData.length;
    const middleI = Math.floor(stackData.length / 2);

    return (
        <div className='relative flex items-center justify-center min-h-screen bg-black mt-[200px]'>
            {stackData.map((item, index) => {

                const distance = index - middleI;
                const xOffset = distance * 200;
                const yOffset = Math.pow(distance, 2) * -60;
                
                const rotation = -distance*8
                return (
                    <TechCards
                        key={item.id}
                        label={item.label}
                        className='absolute transition-transform duration-500'
                        style={{
                            transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`,
                            zIndex: 20 - Math.abs(distance)
                        }}
                    />

                );
            })}
        </div>
    );
};