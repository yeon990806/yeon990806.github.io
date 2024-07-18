const TagPin = ({text}: { text: string }) => {
  return (
    <span className="text-xs inline-block px-2 pt-1 py-0.5 rounded-sm bg-light-blue100 dark:bg-blue-dark100 text-light-blue800 dark:text-dark-blue800 leading-none">
      { text }
    </span>
  );
};
export default TagPin;