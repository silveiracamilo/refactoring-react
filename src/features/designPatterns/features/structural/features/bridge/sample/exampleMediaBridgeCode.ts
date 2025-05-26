export const exampleMediaBridgeCode = 
`/**
 * Abstração: MediaPlayer — um player que pode dar play em qualquer mídia.
 * Implementações concretas:
 * * AudioRenderer — reproduz áudio.
 * * VideoRenderer — reproduz vídeo.
 */

import React, { useRef, type JSX } from 'react';
import { Button } from 'antd';

// types.ts 
// Cria interface da implementação da Bridge
export type MediaRenderer = {
  play: () => void;
  pause: () => void;
  stop: () => void;
};


// useAudioRenderer.ts
// Cria implementação concreta do AudioRenderer
export const useAudioRenderer = (src: string): MediaRenderer => {
  const audioRef = useRef(new Audio(src));

  return {
    play: () => {
      audioRef.current.play();
    },
    pause: () => {
      audioRef.current.pause();
    },
    stop: () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    },
  };
};


// useVideoRenderer.ts
// Cria implementação concreta do VideoRenderer
export const useVideoRenderer = (src: string): MediaRenderer & { element: JSX.Element } => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const element = (
    <video
      ref={videoRef}
      width="480"
      controls={false}
      className='rounded-2xl bg-black'
    >
      <source src={src} type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>
  );

  return {
    play: () => {
      videoRef.current?.play();
    },
    pause: () => {
      videoRef.current?.pause();
    },
    stop: () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    },
    element,
  };
};

// MediaPlayer.tsx
type MediaPlayerProps = {
    renderer: MediaRenderer;
};

// Cria Abstração do MediaPlayer recebendo implementação concreta via prop renderer
export const MediaPlayer: React.FC<MediaPlayerProps> = ({ renderer }) => {
  return (
    <div className='flex gap-3'>
      <Button onClick={renderer.play}>Play</Button>
      <Button onClick={renderer.pause}>Pause</Button>
      <Button onClick={renderer.stop}>Stop</Button>
    </div>
  );
};

// Exemplo de uso da Bridge
const ExampleMediaBridge = () => {
  const audioRenderer = useAudioRenderer('/media/10seconds.mp3');
  const videoRenderer = useVideoRenderer('/media/10seconds.mp4');

  return (
    <div className='p-6 bg-gray-900'>
      <div className='mb-6'>
        <h2 className='text-2xl mb-4'>Audio Player</h2>
        <MediaPlayer renderer={audioRenderer} />
      </div>

      <div>
        <h2 className='text-2xl mb-4'>Video Player</h2>
        {videoRenderer.element}
        <div className='mt-4'>
            <MediaPlayer renderer={videoRenderer} />
        </div>
      </div>
    </div>
  );
};

export default ExampleMediaBridge;`;

export const exampleMediaBridgeRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-[50%]'>
    <ExampleMediaBridge />
</div>`;