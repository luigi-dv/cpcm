import { getMapSource } from '@/utils/google/maps/getSource';

export const MapView = async ({ query }: { query: string }) => {
  const src = await getMapSource(query);
  return (
    <iframe
      style={{
        border: 0,
        width: '100%',
        height: '100%',
      }}
      loading='lazy'
      allowFullScreen
      referrerPolicy='no-referrer-when-downgrade'
      src={src}
    ></iframe>
  );
};

export default MapView;
