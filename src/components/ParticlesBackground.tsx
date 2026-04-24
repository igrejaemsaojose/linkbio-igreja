import { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Calculate exclusion zone based on window width
  const { centerStart, centerEnd, isMobile } = useMemo(() => {
    const isMobileDevice = windowWidth < 640;
    // No mobile, usar largura menor para zona de exclusão
    const contentWidth = isMobileDevice ? 280 : 448 + 96;
    const exclusionPercent = (contentWidth / windowWidth) * 100;
    const start = (100 - exclusionPercent) / 2;
    const end = 100 - start;
    return {
      centerStart: Math.max(start, 8), // mínimo 8% cada lado
      centerEnd: Math.min(end, 92),
      isMobile: isMobileDevice
    };
  }, [windowWidth]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate particles only in lateral zones
  useEffect(() => {
    const generateX = () => {
      const side = Math.random() > 0.5;
      if (side) {
        return Math.random() * centerStart; // left side
      } else {
        return centerEnd + Math.random() * (100 - centerEnd); // right side
      }
    };

    const initialParticles: Particle[] = Array.from({ length: isMobile ? 25 : 40 }, (_, i) => ({
      id: i,
      x: generateX(),
      y: Math.random() * 100,
      size: isMobile ? Math.random() * 8 + 6 : Math.random() * 8 + 4,
      opacity: isMobile ? Math.random() * 0.3 + 0.4 : Math.random() * 0.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.4,
    }));
    setParticles(initialParticles);
  }, [centerStart, centerEnd, isMobile]);

  // Animate particles, keeping them in lateral zones
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = ((particle.y + particle.speedY + 100) % 100);
          let newSpeedX = particle.speedX;

          // Keep particles in lateral zones
          if (newX < 0) {
            newX = 0;
            newSpeedX = Math.abs(newSpeedX);
          } else if (newX > centerStart && newX < centerEnd) {
            // If entering exclusion zone, bounce back
            if (particle.speedX > 0) {
              newX = centerStart;
              newSpeedX = -Math.abs(newSpeedX);
            } else {
              newX = centerEnd;
              newSpeedX = Math.abs(newSpeedX);
            }
          } else if (newX > 100) {
            newX = 100;
            newSpeedX = -Math.abs(newSpeedX);
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
          };
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, [centerStart, centerEnd]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[hsl(240,100%,15%)] transition-all duration-1000 ease-linear"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
