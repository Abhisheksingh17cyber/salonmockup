import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-center md:text-left mb-4">
              <div className="text-xl tracking-widest">A TO Z</div>
              <div className="text-xs tracking-[0.3em] opacity-80">STUDIO</div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">© 2026 A to Z Studio</p>
            <p className="text-sm opacity-80">All rights reserved</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8 border-t border-primary-foreground/20">
          <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
            Privacy Policy
          </a>
          <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
