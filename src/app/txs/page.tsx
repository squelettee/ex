"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function TokenTxns() {
  const [txns, setTxns] = useState<number | null>(null);
  const [goalReached, setGoalReached] = useState(false);
  const [uniqueUsers, setUniqueUsers] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<InstanceType<typeof FlameParticle>[]>([]);
  const router = useRouter();
  const GOAL = 10000;
  const [testMode, setTestMode] = useState<number | null>(null);
  const progress = testMode !== null ? testMode : (txns ? Math.min((txns / GOAL) * 100, 100) : 0);

  // --- Particle Class ---
  const FlameParticle = useMemo(() => class FlameParticle {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
    initialRadius: number = 0;
    speedY: number = 0;
    life: number = 0;
    maxLife: number = 0;
    color: string = '';
    waver: number = 0;
    waverSpeed: number = 0;

    constructor(canvas: HTMLCanvasElement) {
      this.reset(canvas);
    }

    reset(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 50;

      this.radius = Math.random() * 6 + 2;
      this.initialRadius = this.radius;

      this.speedY = Math.random() * 2 + 1;
      this.life = Math.random() * 300 + 200;
      this.maxLife = this.life;

      // Fire colors (red, orange, yellow)
      const fireColors = [
        'rgb(255, 69, 0)',     // Red-orange
        'rgb(255, 140, 0)',    // Dark orange
        'rgb(255, 165, 0)',    // Orange
        'rgb(255, 215, 0)',    // Gold
        'rgb(255, 69, 0)',     // Red
        'rgb(255, 99, 71)'     // Tomato
      ];
      this.color = fireColors[Math.floor(Math.random() * fireColors.length)];

      this.waver = Math.random() * 2 - 1;
      this.waverSpeed = Math.random() * 0.05 + 0.01;
    }

    update() {
      this.life--;
      this.y -= this.speedY;

      this.waver += this.waverSpeed;
      this.x += Math.sin(this.waver) * 1.0;

      this.radius = this.initialRadius * (this.life / this.maxLife);

      if (this.life <= 0 || this.radius <= 0.1) {
        if (canvasRef.current) {
          this.reset(canvasRef.current);
        }
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      const opacity = this.life / this.maxLife;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      ctx.shadowColor = this.color;
      ctx.shadowBlur = 15;

      // Convert RGB to RGBA with opacity
      const rgbMatch = this.color.match(/rgb\((\d+), (\d+), (\d+)\)/);
      if (rgbMatch) {
        const [, r, g, b] = rgbMatch;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.7})`;
      } else {
        ctx.fillStyle = this.color;
      }
      ctx.fill();

      ctx.shadowBlur = 0;
    }
  }, []);


  // --- Canvas Effects ---
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Calculate the number of particles based on percentage (max 400 particles at 100%)
      const numberOfParticles = Math.floor((progress / 100) * 400);

      particlesRef.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new FlameParticle(canvas));
      }
    };

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear the canvas completely each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particlesRef.current) {
        particle.update();
        particle.draw(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [progress, FlameParticle]);


  // API call every 10 seconds
  useEffect(() => {
    const fetchTxns = async () => {
      if (goalReached) return;

      try {
        const mint = "CS1Qanea8J59R4t44QQNYjLe6dbfWxSCbwcuzfR8pump";
        const url = `https://data.solanatracker.io/tokens/${mint}`;

        const res = await fetch(url, {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "x-api-key": "8d41f65e-a824-48f9-81cb-6406c03282dc",
          },
        });

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();
        // We look for the total txs in the first pool (pools[0].txns.total)
        let currentTxns = 0;

        if (data && Array.isArray(data.pools) && data.pools.length > 0) {
          const pool = data.pools[0];
          if (pool.txns && typeof pool.txns.total === "number") {
            currentTxns = pool.txns.total;
          }
        }

        setTxns(currentTxns);

        // Simulate unique users (in real app, this would come from API)
        setUniqueUsers(Math.floor(currentTxns * 0.3)); // Assume 30% of txns are unique users

        if (currentTxns >= GOAL) {
          setGoalReached(true);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    // Initial call
    fetchTxns();

    // Configure interval to call every 10 seconds
    const interval = setInterval(fetchTxns, 10000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, [goalReached]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Canvas for flame particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Test Mode Buttons */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => setTestMode(null)}
          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${testMode === null
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          Normal
        </button>
        <button
          onClick={() => setTestMode(25)}
          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${testMode === 25
            ? 'bg-orange-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          25%
        </button>
        <button
          onClick={() => setTestMode(50)}
          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${testMode === 50
            ? 'bg-orange-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          50%
        </button>
        <button
          onClick={() => setTestMode(75)}
          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${testMode === 75
            ? 'bg-orange-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          75%
        </button>
        <button
          onClick={() => setTestMode(100)}
          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${testMode === 100
            ? 'bg-orange-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          100%
        </button>
      </div>

      {/* Back to Landing Button */}
      <div className="absolute top-4 left-4 z-20">
        <button
          onClick={() => router.push('/landing')}
          className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-800 text-gray-300 hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>

      {/* Progress overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-0 mb-6">
            <Image src="/logo.png" alt="Nextex logo" width={64} height={64} className="rounded-lg" />
            <div className="text-2xl font-bold text-orange-400 drop-shadow-xl">$EX</div>
          </div>


          {/* txs count and goal */}
          <div className="text-2xl font-semibold text-white drop-shadow-xl mb-2">
            {txns?.toLocaleString() || 0} / {GOAL.toLocaleString()} txs
          </div>

          {/* Unique Users */}
          <div className="mb-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="text-orange-200 font-semibold text-center">Unique Users</div>
              <div className="text-white text-xl font-bold text-center">
                {uniqueUsers ? uniqueUsers.toLocaleString() : 'Loading...'}
              </div>
            </div>
          </div>

          {/* Goal message */}
          <div className="text-lg text-orange-200 drop-shadow-lg mb-6">
            Goal: Reach 10,000 txs
          </div>

          {/* Open App button when goal reached */}
          {goalReached && (
            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl rounded-lg transition-colors shadow-lg"
            >
              🎉 Open App
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
