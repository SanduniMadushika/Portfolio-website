import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-center flex items-center gap-2">
            © {new Date().getFullYear()} Madushika Sanduni. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> and passion
            for technology.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            BICT Undergraduate - University of Vavuniya
          </p>
        </div>
      </div>
    </footer>
  );
}
