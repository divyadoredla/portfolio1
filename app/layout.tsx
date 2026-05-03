import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Divya Sri Doredla — AI/ML Engineer',
  description: 'AI/ML Engineer specializing in computer vision, reinforcement learning, and intelligent systems. Building machines that perceive, learn, and adapt.',
  keywords: ['AI Engineer', 'ML Engineer', 'Computer Vision', 'Deep Learning', 'Python', 'TensorFlow'],
  openGraph: {
    title: 'Divya Sri Doredla — AI/ML Engineer',
    description: 'Building machines that perceive, learn, and adapt.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-void text-text-primary font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-border py-8 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-sm text-text-dim">
              © 2026 Divya Sri Doredla
            </span>
            <span className="font-mono text-sm text-text-dim">
              Built with Next.js + Tailwind
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
