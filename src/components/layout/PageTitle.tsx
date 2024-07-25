type PageTitleProps = {
  pageTitle: string;
  pageDescription: string;
};

const PageTitle = ({
  pageTitle,
  pageDescription
}: PageTitleProps) => {
  return (
    <div className="grid gap-2">
      <h1 className="text-2xl font-bold">
        { pageTitle }
      </h1>
      <p>
        { pageDescription }
      </p>
    </div>
  );
}
export default PageTitle