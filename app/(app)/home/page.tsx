"use client";

import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types';
const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos");
      if (Array.isArray(response.data)) {
        setVideos(response.data);
      }
      else {
        throw new Error("Unexpected response format")
      }
    } catch (error) {
      console.log(error);
      setError(" Failed to fetch Videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleDownload = useCallback(async(url: string, title: string) => {
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", `${title}.mp4`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
    }, [])


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        Videos
      </h1>
      {videos.length === 0 ? (
        <div className='text-center text-lg text-gray-500'>
          No Videos Available
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            videos.map((video) => (
              <VideoCard 
              key={video.publicId}
              video={video}
              onDownload={handleDownload}
              />
            ))
          }
        </div>
      )}
    </div>
  )
}

export default Home
