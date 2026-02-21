
import Link from 'next/link';

interface HeaderProps {
  platform: 'linkedin' | 'github';
}

export default function Header({ platform }: HeaderProps) {

  const activeColor = platform === 'linkedin' ? 'text-[#0A66C2]' : 'text-[#238636]';
  
  return (
    <nav className="flex gap-8 p-4 bg-zinc-950 border-b border-zinc-800 shadow-lg items-center">+
      <span className={`text-xs uppercase tracking-widest font-bold px-2 py-1 rounded border ${platform === 'linkedin' ? 'border-blue-900 text-blue-400' : 'border-zinc-700 text-zinc-400'}`}>
        {platform}
      </span>

      <Link 
        href="/linkedin" 
        className={`${platform === 'linkedin' ? activeColor : 'text-zinc-500'} font-medium hover:text-white transition-all`}
      >
        LinkedIn
      </Link>
      
      <Link 
        href="/github" 
        className={`${platform === 'github' ? activeColor : 'text-zinc-500'} font-medium hover:text-white transition-all`}
      >
        GitHub
      </Link>
    </nav>
  );
}