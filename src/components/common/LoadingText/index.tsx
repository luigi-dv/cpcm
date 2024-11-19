import HyperText from '@/components/ui/hyper-text';

export const LoadingText = (props: { text?: string }) => {
  return (
    <div>
      <HyperText text={props.text ?? 'Working on it...'} />
    </div>
  );
};
