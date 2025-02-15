"use client";
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: Particle[] = [];
    const colors = ["#ff6f61", "#6f9cff", "#00ffa3", "#ffd700"];

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      velocityX: number;
      velocityY: number;
      glowSize: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(
        x: number,
        y: number,
        size: number,
        color: string,
        velocityX: number,
        velocityY: number,
        canvasWidth: number,
        canvasHeight: number
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.glowSize = Math.random() * 20 + 10; // Random glow size
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = this.glowSize;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Reverse direction on boundary collision using canvasWidth and canvasHeight
        if (this.x < 0 || this.x > this.canvasWidth) this.velocityX *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.velocityY *= -1;
      }
    }

    function initParticles(count: number) {
      if (!canvas) return;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 3 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const velocityX = (Math.random() - 0.5) * 2;
        const velocityY = (Math.random() - 0.5) * 2;

        particlesArray.push(
          new Particle(x, y, size, color, velocityX, velocityY, canvas.width, canvas.height)
        );
      }
    }

    function connectParticles() {
      if (ctx) {
        for (let i = 0; i < particlesArray.length; i++) {
          for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const gradient = ctx.createLinearGradient(
                particlesArray[i].x,
                particlesArray[i].y,
                particlesArray[j].x,
                particlesArray[j].y
              );
              gradient.addColorStop(0, particlesArray[i].color);
              gradient.addColorStop(1, particlesArray[j].color);

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.2;
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.length = 0;
      initParticles(100);
    }

    window.addEventListener("resize", resizeCanvas);

    initParticles(100);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ParticleBackground;