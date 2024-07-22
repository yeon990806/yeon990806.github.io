const TagPin = ({text}: { text: string }) => {
  return (
    <span className="inline-block px-2 text-xs leading-none rounded-sm bg-light-blue100 dark:bg-blue-dark100 text-light-blue800 dark:text-dark-blue800">
      { text }
    </span>
  );
};
export default TagPin;