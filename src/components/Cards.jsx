export const TechCards = ({label, className='', style={}}) => {
    return (
        
        <div 
        style = {style}
        className={`h-30 w-60 rounded-2xl p-8 cursor-pointer
      flex items-center justify-center text-xl text-white text-center
      bg-gradient-to-br from-white/10 to-blue-900/30 backdrop-blur-md 
      border border-white/20 shadow-lg 
      transition-transform duration-1000 hover:scale-105
      hover:from-blue-900/30 hover:to-white/10
      ${className}`} >
        {label}
        </div>
    );
};