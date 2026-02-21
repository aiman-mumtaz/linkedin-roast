export const CustomInput = ({ platform }: { platform: 'linkedin' | 'github' }) => {
  const focusColor = platform === 'linkedin' ? 'focus:ring-[#0A66C2]' : 'focus:ring-[#238636]';
  
  return (
    <input 
      type="text"
      placeholder={`Search ${platform}...`}
      className={`w-full max-w-md p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white outline-none ring-1 ring-transparent transition-all ${focusColor}`}
    />
  );
};

export const CustomButton = ({ platform, label }: { platform: 'linkedin' | 'github', label: string }) => {
  const bgColor = platform === 'linkedin' ? 'bg-[#0A66C2] hover:bg-[#004182]' : 'bg-[#238636] hover:bg-[#2ea043]';
  const fontStyle = platform === 'linkedin' ? 'font-sans' : 'font-mono';

  return (
    <button className={`px-6 py-3 rounded-full text-white font-bold transition-colors ${bgColor} ${fontStyle}`}>
      {label}
    </button>
  );
};