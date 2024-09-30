'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { getExhibitionImage } from '@/action/exhibitionAction';

const ExhibitionImage = ({ id }: { id: number }) => {
  const [exhibitionImageSrc, setExhibitionImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchExhibitionImgSrc = async () => {
      const src = await getExhibitionImage(id);
      setExhibitionImageSrc(src.detail);
    };

    fetchExhibitionImgSrc();
  }, [id]);

  return (
    <section>
      <div className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src={`${exhibitionImageSrc}`}
          alt={`${id}`}
          fill
          priority
          className="overflow-clip object-cover"
        />
      </div>
    </section>
  );
};

export default ExhibitionImage;
